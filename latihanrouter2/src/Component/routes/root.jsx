import React from 'react'
import {  useNavigation,Outlet,  NavLink,Link,useLoaderData,Form,  redirect,  } from "react-router-dom"
import {getContacts,createContact   } from '../contact'

export async function action() {
    const contact = await createContact();
    // return { contact };
    return redirect(`/contacts/${contact.id}/edit`);
  }

export default function Root() {
    const { contacts } = useLoaderData();
    const navigation = useNavigation();
  return (
  <>
   <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>

          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>

        <nav>
          <ul>
            <li>
            <Link to={`contacts/1`}>Your Name</Link>
              {/* <a href={`/contacts/1`}>Your Name</a> */}
            </li>
            <li>
            <Link to={`contacts/2`}>Your Friend</Link>
              {/* <a href={`/contacts/2`}>Your Friend</a> */}
            </li>
          </ul>
        </nav>

        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {/* other code */}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>{/* other code */}</p>
          )}
        </nav>

        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>

      </div>

      <div id="detail"
       className={
        navigation.state === "loading" ? "loading" : ""
      }
      >
      <Outlet />
      </div>
  </>
    
  )
}

export async function loader() {
    const contacts = await getContacts();
    return { contacts };
  }
