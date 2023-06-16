using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Microsoft.Net.Http.Headers;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerUI;
using webapi.Contract;
using webapi.Filters;
using webapi.Implementation;
using webapi.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//builder.Services.AddCors(options =>
//{
//    options.AddPolicy(name: MyAllowSpecificOrigins,
//                      policy =>
//                      {
//                          policy.WithOrigins("http://example.com",
//                                              "http://www.contoso.com");
//                      });
//});

//builder.Services.AddCors(options =>
//{
//    options.AddPolicy(MyAllowSpecificOrigins,
//                          policy =>
//                          {
//                              policy.WithOrigins("https://localhost:3000")
//                                                  .AllowAnyMethod()
//                                                    .AllowAnyHeader()
//                                                  //.AllowAnyOrigin()
//                                                  //.SetIsOriginAllowedToAllowWildcardSubdomains()
//                                                  //.AllowCredentials()
//                                                  .WithExposedHeaders(new string[] {"totalAmountOfRecords" });
//                          });
//});

//builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
//{
//    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
//}));
//Enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod()
      .AllowAnyHeader());
});

//builder.Services.AddCors(options =>
//{
//    options.AddDefaultPolicy(
//        policy =>
//        {
//            policy.WithOrigins("https://localhost:3000").AllowAnyMethod().AllowAnyHeader()
//            .WithExposedHeaders(new string[] { "totalAmountOfRecords"});
//        });
//});

//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("Policy1", // liat dicontroller
//        policy =>
//        {
//            policy.WithOrigins("http://example.com",
//                                "http://www.contoso.com");
//        });

//    options.AddPolicy("AnotherPolicy",
//        policy =>
//        {
//            policy.WithOrigins("http://www.contoso.com")
//                                .AllowAnyHeader()
//                                .AllowAnyMethod();
//        });
//});



//builder.Services.AddCors(options =>
//{
//    options.AddPolicy(name: "MyPolicy",
//        policy =>
//        {
//            policy.WithOrigins("http://example.com",
//                                "http://www.contoso.com")
//                    .WithMethods("PUT", "DELETE", "GET");
//        });
//});


//AllowAnyOrigin: Allows CORS requests from all origins with any scheme (http or https).
//AllowAnyOrigin is insecure because any website can make cross-origin requests to the app.
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy(name: MyAllowSpecificOrigins,
//        policy =>
//        {
//            policy.WithOrigins("https://*.example.com")
//                .SetIsOriginAllowedToAllowWildcardSubdomains();
//        });
//});


//To allow specific headers to be sent in a CORS request, called author request headers,
//call WithHeaders and specify the allowed headers:
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy(name: MyAllowSpecificOrigins,
//       policy =>
//       {
//           policy.WithOrigins("http://example.com")
//                  .WithHeaders(HeaderNames.ContentType, "x-custom-header");
//       });
//});


//To allow all author request headers, call AllowAnyHeader:
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy(name: MyAllowSpecificOrigins,
//        policy =>
//        {
//            policy.WithOrigins("https://*.example.com")
//                   .AllowAnyHeader();
//        });
//});

//The CORS specification calls these headers simple response headers. To make other headers available to the app,
//call WithExposedHeaders:
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("MyExposeResponseHeadersPolicy",
//        policy =>
//        {
//            policy.WithOrigins("https://*.example.com")
//                   .WithExposedHeaders("x-custom-header");
//        });
//});

//The server must allow the credentials. To allow cross-origin credentials, call AllowCredentials:
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("MyMyAllowCredentialsPolicy",
//        policy =>
//        {
//            policy.WithOrigins("http://example.com")
//                   .AllowCredentials();
//        });
//});
//contoh di FE nya
//    $.ajax({
//  type: 'get',
//  url: 'https://www.example.com/api/test',
//  xhrFields:
//{
//withCredentials: true
//  }
//});
//fetch('https://www.example.com/api/test', {
//credentials: 'include'
//});


//To allow specific headers, call WithHeaders:
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("MyAllowHeadersPolicy",
//        policy =>
//        {
//            policy.WithOrigins("http://example.com")
//                       .WithHeaders(HeaderNames.ContentType, "x-custom-header");
//        });
//});


//To allow all author request headers, call AllowAnyHeader:
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("MyAllowAllHeadersPolicy",
//        policy =>
//        {
//            policy.WithOrigins("https://*.example.com")
//                   .AllowAnyHeader();
//        });
//});


//The Access-Control-Max-Age header specifies how long the response to the preflight request can be cached.
//To set this header, call SetPreflightMaxAge:
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("MySetPreflightExpirationPolicy",
//        policy =>
//        {
//            policy.WithOrigins("http://example.com")
//                   .SetPreflightMaxAge(TimeSpan.FromSeconds(2520));
//        });
//});





builder.Host.ConfigureLogging(logging =>
{
    logging.ClearProviders();
    logging.AddConsole();
});

builder.Services.AddDbContext<AssessmentdbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddScoped<ITesTechnicalService, TesTechnicalService>();
builder.Services.AddScoped<IDepartmentRepository, DepartmentRepository>();
builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();
builder.Services.AddScoped<IMovieRepository, MovieRepository>();
builder.Services.AddScoped<IPostRepository, PostRepository>();
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddControllers(options =>
{
    options.Filters.Add<UnhandledExceptionFilterAttribute>();//register services
    var cacheProfiles = builder.Configuration
            .GetSection("CacheProfiles")
            .GetChildren();
    foreach (var cacheProfile in cacheProfiles)
    {
        options.CacheProfiles
        .Add(cacheProfile.Key,
        cacheProfile.Get<CacheProfile>());
    }
});
//builder.Services.AddControllers(options =>
//{
//    options.CacheProfiles.Add("Cache2Mins",
//        new CacheProfile()
//        {
//            Duration = 120,
//            Location = ResponseCacheLocation.Any
//        });
//});
//builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();


builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "Latihan Fullstack React Net Core",
        Description = "Latihan Fullstack React Net Core",
        TermsOfService = new Uri("https://example.com/terms"),
        Contact = new OpenApiContact
        {
            Name = "Example Contact",
            Url = new Uri("https://example.com/contact")
        },
        License = new OpenApiLicense
        {
            Name = "Example License",
            Url = new Uri("https://example.com/license")
        }
    });

    //  options.OperationFilter<AddHeaderParameter>();

    // using System.Reflection;
    var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));


});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    //app.UseSwaggerUI();
    app.UseSwaggerUI(c => {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Latihan Fullstack React Net Core");
        c.DocumentTitle = "Latihan Fullstack React Net Core";
        c.DocExpansion(DocExpansion.List);
    });

}



app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "Photos")),
    RequestPath = "/Photos"
});

//app.UseCors(MyAllowSpecificOrigins);
//app.UseCors();
app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
//app.UseCors("corsapp");

app.UseHttpsRedirection();

app.UseAuthorization();

//app.UseSwagger();
////app.UseSwaggerUI();
//app.UseSwaggerUI(c => {
//    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Latihan Fullstack React Net Core");
//    c.DocumentTitle = "Latihan Fullstack React Net Core";
//    c.DocExpansion(DocExpansion.List);
//});

app.MapControllers();

app.Run();
