﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace webapi.Models;

public partial class AssessmentdbContext : DbContext
{
    public AssessmentdbContext()
    {
    }

    public AssessmentdbContext(DbContextOptions<AssessmentdbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Contact> Contacts { get; set; }

    public virtual DbSet<Department> Departments { get; set; }

    public virtual DbSet<Employee> Employees { get; set; }

    public virtual DbSet<EmployeeLogin> EmployeeLogins { get; set; }

    public virtual DbSet<Ltcourierfee> Ltcourierfees { get; set; }

    public virtual DbSet<Mscourier> Mscouriers { get; set; }

    public virtual DbSet<Mspayment> Mspayments { get; set; }

    public virtual DbSet<Msproduct> Msproducts { get; set; }

    public virtual DbSet<Mssale> Mssales { get; set; }

    public virtual DbSet<Trinvoice> Trinvoices { get; set; }

    public virtual DbSet<Trinvoicedetail> Trinvoicedetails { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=DGLNLO-821684-1;Initial Catalog=assessmentdb;Integrated Security=True;Trust Server Certificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Contact>(entity =>
        {
            entity.ToTable("contacts");

            entity.Property(e => e.Email).HasMaxLength(50);
            entity.Property(e => e.Firstname).HasMaxLength(50);
            entity.Property(e => e.Lastname).HasMaxLength(50);
            entity.Property(e => e.Password).HasMaxLength(50);
            entity.Property(e => e.Phone).HasMaxLength(50);
        });

        modelBuilder.Entity<Department>(entity =>
        {
            entity.ToTable("Department");

            entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");
            entity.Property(e => e.DepartmentName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.ToTable("Employee");

            entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");
            entity.Property(e => e.Department)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Doj)
                .HasColumnType("date")
                .HasColumnName("DOJ");
            entity.Property(e => e.EmailId).HasMaxLength(500);
            entity.Property(e => e.EmployeeName)
                .HasMaxLength(500)
                .IsUnicode(false);
        });

        modelBuilder.Entity<EmployeeLogin>(entity =>
        {
            entity.ToTable("EmployeeLogin");

            entity.Property(e => e.City)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Department)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EmployeeName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Ltcourierfee>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("ltcourierfee");

            entity.Property(e => e.CourierId).HasColumnName("CourierID");
            entity.Property(e => e.Price).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.WeightId).HasColumnName("WeightID");
        });

        modelBuilder.Entity<Mscourier>(entity =>
        {
            entity.HasKey(e => e.CourierId).HasName("PK__mscourie__CDAE76F6667A5D06");

            entity.ToTable("mscourier");

            entity.Property(e => e.CourierId)
                .ValueGeneratedNever()
                .HasColumnName("CourierID");
            entity.Property(e => e.CourierName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Mspayment>(entity =>
        {
            entity.HasKey(e => e.PaymentId).HasName("PK__mspaymen__9B556A58DF0C4D3B");

            entity.ToTable("mspayment");

            entity.Property(e => e.PaymentId)
                .ValueGeneratedNever()
                .HasColumnName("PaymentID");
            entity.Property(e => e.PaymentName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Msproduct>(entity =>
        {
            entity.HasKey(e => e.ProductId).HasName("PK__msproduc__B40CC6ED2A980016");

            entity.ToTable("msproduct");

            entity.Property(e => e.ProductId)
                .ValueGeneratedNever()
                .HasColumnName("ProductID");
            entity.Property(e => e.Price).HasColumnType("decimal(10, 0)");
            entity.Property(e => e.ProductName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Mssale>(entity =>
        {
            entity.HasKey(e => e.SalesId).HasName("PK__mssales__C952FB12C1FDAA76");

            entity.ToTable("mssales");

            entity.Property(e => e.SalesId)
                .ValueGeneratedNever()
                .HasColumnName("SalesID");
            entity.Property(e => e.SalesName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Trinvoice>(entity =>
        {
            entity.HasKey(e => e.InvoiceNo).HasName("PK__trinvoic__D796B226BCA252B6");

            entity.ToTable("trinvoice");

            entity.Property(e => e.InvoiceNo)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.CourierFee).HasColumnType("decimal(10, 0)");
            entity.Property(e => e.CourierId).HasColumnName("CourierID");
            entity.Property(e => e.InvoiceDate).HasColumnType("datetime");
            entity.Property(e => e.InvoiceTo)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.SalesId).HasColumnName("SalesID");
            entity.Property(e => e.ShipTo)
                .HasMaxLength(500)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Trinvoicedetail>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("trinvoicedetail");

            entity.Property(e => e.InvoiceNo)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.Price).HasColumnType("decimal(10, 0)");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
