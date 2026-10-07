Before cloud computing, virtual machines, AWS, or anything else, we need to understand what a server actually is. You have probably heard the word a hundred times: web server, server room, application server, server outage. It can sound like some special category of computer. It is not.

A server is mainly about a job. It is a machine that provides a service or resource to another machine over a network. That other machine is usually called the client.

## What a server actually means

Think about a restaurant. A customer asks for something, the restaurant processes the request, and the food comes back. A server on the Internet works in a similar way. A client asks for something, the server does some work, and the server sends a response back.

The important word here is **provide**. A server provides something: a web page, an API response, a file, a database result, an authentication service, or even access to another machine.

```text
CLIENT                         SERVER
  │                               │
  │────── request ───────────────>│
  │                               │
  │<────── response ──────────────│
```

## Client vs server

The client is the side asking for something. The server is the side responding to that request. Your browser is a client. When you open a website, it sends requests to a server. The server might fetch data from a database, run some application logic, build a response, and send it back.

The roles are more important than the physical machines. One computer can act as a client in one situation and a server in another. Your laptop can request a page from a website and, at the same time, run a local server for a project you are developing.

| CLIENT | SERVER |
| --- | --- |
| Requests a service or resource. A browser, mobile app, or another backend service can be a client. | Provides a service or resource. It receives requests, performs work, and returns a response. |

## What makes a machine a server?

There is no single hardware feature that turns a computer into a server. A server is usually a computer running software that listens for requests and provides a service. The hardware still has CPU, RAM, storage, and a network interface just like other computers.

What changes is the role and the way the machine is operated. Servers are normally configured to be reachable over a network, to run specific services, and to stay available for the clients that depend on them.

- It runs software that provides a service.
- It listens for or receives network requests.
- It has enough resources for the workload it handles.
- It is usually managed for reliability and availability.

## Servers don't have to be special hardware

This is one of the easiest misconceptions to remove early. A server does not need a giant metal box with blinking lights. Your own laptop can be a server.

For example, when you run a development server with something like Vite, Node.js, Python, or a small HTTP program, your laptop is temporarily acting as a server. Your browser connects to it, the program receives the request, and the program sends a response.

In production, we use hardware and infrastructure designed for long-running workloads, reliability, networking, and scale. But the basic idea does not change: a machine is acting as a server because of the role it is performing.

> **NOTE:** Server is a role, not a magical type of computer.

## Common types of servers

The word server becomes more useful when we talk about what the server is actually responsible for. A production system will often have multiple servers or services, each with a different job.

### Web server

Handles HTTP requests and serves web content such as HTML, CSS, JavaScript, images, or other static files. Nginx is a common example.

### Application server

Runs application logic. It can authenticate users, process business rules, talk to other services, and return API responses. A Node.js or Python backend can act as an application server.

### Database server

Runs a database system and handles data operations such as storing, querying, updating, and retrieving records. PostgreSQL and MySQL are common examples.

## Why servers run continuously

Imagine you open an application at 2 AM. The service still needs to respond even though nobody is sitting in front of the machine pressing buttons. That is why production servers are generally designed to run continuously and be available whenever requests arrive.

Continuous operation does not mean a server can never fail. Hardware can break, software can crash, networks can go down, and entire data centers can have problems. The goal is to design the system so that failures are handled and availability is kept high.

- The service may receive requests at any time.
- Other services may depend on it continuously.
- Users expect applications to be available without someone manually starting them.
- Production systems use monitoring, restarts, redundancy, and backups to deal with failures.

## A simple request-response example

Suppose you open a website in your browser. You type a URL and press Enter. Your browser is the client. It needs the server to provide the requested resource.

The browser sends a request. The server receives it, decides what to do, and generates a response. That response might contain the requested HTML, JSON data, an error message, or something else. The browser then uses the response to continue the interaction.

```text
1. Browser asks for a page
            │
            ▼
2. Server receives the request
            │
            ▼
3. Server runs the required logic
            │
            ▼
4. Server sends a response
            │
            ▼
5. Browser uses the response
```

> **NOTE:** Later, when we learn HTTP and networking, we will open up each of these steps and look at what is actually happening on the wire.

## Feynman check

Close the notes and explain these in your own words. You are not trying to repeat the lesson. You are trying to see whether you actually understand it.

1. Explain what a server is without using the words “special computer”.
2. Explain the difference between a client and a server using a website as the example.
3. Could your laptop act as a server? Explain why.
4. Why would a production server normally need to stay available continuously?

## Practice

1. Your browser opens a website. Which side is the client and which side is the server?
2. A Node.js program is listening for HTTP requests on your laptop. Is your laptop a server in this situation?
3. What is the difference between a web server and an application server?
4. Does a server need special hardware to be called a server?
5. Why is availability important for a server that powers a production application?
6. A database is running on one machine and the API is running on another. Which machine is the client when the API queries the database?
