# 01.9 — Cloud Service Providers

At this point, we have moved from a physical machine to a virtual server.

Now we need to understand **who operates the infrastructure that gives you these resources**.

This is where **cloud service providers** come in.

Some of the biggest names are:

```text
AWS
Microsoft Azure
Google Cloud
Oracle Cloud
```

But what exactly are these companies providing?

---

## What a cloud provider actually does

A cloud provider operates large amounts of infrastructure and exposes that infrastructure through software services.

At the physical level:

```text
Data centers
   ↓
Physical servers
   ↓
Networking
   ↓
Storage
```

At the cloud-service level:

```text
Compute
Storage
Databases
Networking
Security
Monitoring
Queues
Serverless
```

You interact with the second layer.

The provider manages much of the first layer.

---

## AWS, Azure and Google Cloud

You will hear these names constantly.

### AWS

Amazon Web Services.

AWS provides a very large collection of cloud infrastructure and managed services.

### Microsoft Azure

Microsoft's cloud platform.

Azure provides compute, storage, networking, databases, identity, developer tools, and many other services.

### Google Cloud

Google's cloud platform.

Google Cloud provides infrastructure and managed services across compute, storage, networking, data, and more.

### Oracle Cloud

Oracle Cloud provides infrastructure and managed services, including compute, storage, networking, and database-related services.

You do not need to memorize service names yet.

The important idea is:

> These companies operate the infrastructure and provide software interfaces for consuming it.

---

## Why are cloud providers different from simple VPS providers?

A VPS provider might primarily offer:

```text
Virtual server
Storage
Network
```

A major cloud provider can offer an entire ecosystem:

```text
Compute
Storage
Databases
Networks
Identity
Load balancers
Queues
Monitoring
CDNs
Serverless
Infrastructure as Code
```

This matters because real systems rarely consist of one server.

A production application might need many different infrastructure components.

A cloud provider gives you a way to connect these components.

---

## Services instead of machines

This is a major shift.

Early in your cloud learning, you will probably think:

> "I need a server."

Later, you should start thinking:

> "I need compute."

That sounds like a small wording change, but it is actually an important change in mindset.

A workload may not require you to manage a traditional server at all.

You might use:

```text
Compute service
Managed database
Object storage
Managed cache
Message queue
```

The cloud provider gives you the appropriate abstraction for the job.

---

## Regions

Cloud providers operate infrastructure in different geographic areas.

These are commonly called **regions**.

A region is a geographic area in which a provider operates cloud infrastructure.

The exact implementation differs between providers, but the basic idea is:

```text
Region A
Region B
Region C
```

You may choose where a resource is deployed.

Why?

Because location affects things such as:

- latency
- data residency
- availability
- compliance
- disaster recovery

---

## Availability Zones

Inside some cloud-provider regions, infrastructure is divided into separate **availability zones**.

A simplified view:

```text
Region
 ├── Zone A
 ├── Zone B
 └── Zone C
```

The goal is to provide more independent infrastructure locations within the broader geographic region.

This becomes useful when designing systems that should survive failures.

You do not need to understand every provider-specific detail yet.

Just remember:

> Cloud infrastructure is organized geographically and physically.

---

## Cloud providers expose APIs

This is one of the biggest reasons cloud infrastructure is powerful.

You do not have to manually walk into a data center and install a server.

You can request resources through:

```text
Web dashboard
CLI
API
Infrastructure as Code
```

That means infrastructure can be controlled programmatically.

For example:

```text
Program
   ↓
Cloud API
   ↓
Create resource
```

This is one of the foundations of modern DevOps and infrastructure automation.

---

## Managed services

Cloud providers also offer services where they operate more of the underlying system for you.

For example, instead of installing and maintaining a database yourself, you might use a managed database service.

Conceptually:

```text
You
 ↓
Managed Database
 ↓
Provider manages infrastructure
```

You still need to understand the database.

But you do not necessarily manage the physical server, operating system, backups, and every underlying maintenance task yourself.

The exact responsibility boundary depends on the service.

---

## The cloud provider is not responsible for everything

This is important.

Cloud providers operate the infrastructure they provide, but you are still responsible for the parts you control.

For example, if you deploy an application on a virtual machine, the provider may operate:

```text
Physical hardware
Data center
Physical networking
```

You may still be responsible for:

```text
Operating system
Application
Application configuration
User access
Secrets
```

This idea becomes much more important when we discuss cloud security later.

---

## Why so many cloud services exist

At first, cloud service lists can look ridiculous.

There are hundreds of services.

But the reason is actually fairly straightforward.

Different applications need different infrastructure.

A global application might need:

```text
Compute → run code
Storage → store files
Database → store structured data
Cache → reduce repeated work
Queue → handle asynchronous jobs
Load balancer → distribute traffic
DNS → route users
Monitoring → understand the system
```

Instead of building each infrastructure layer from scratch, you can use managed services.

---

## Mental Model

Think of a cloud provider as a huge infrastructure company that exposes its infrastructure through software.

Behind the scenes:

```text
Data centers
   ↓
Physical infrastructure
   ↓
Virtualization / infrastructure systems
   ↓
Cloud services
   ↓
Your application
```

You operate from the top.

The provider operates much of the bottom.

---

## Feynman Check

### 1. What is a cloud service provider?

A company that operates large-scale computing infrastructure and provides access to that infrastructure and managed services through software interfaces.

### 2. Name some cloud providers.

AWS, Azure, Google Cloud, Oracle Cloud.

### 3. Why are cloud providers more than VPS companies?

Because they provide a broad ecosystem of compute, storage, networking, databases, identity, messaging, monitoring, and other services.

### 4. What is a region?

A geographic area where a cloud provider operates infrastructure.

### 5. What is the purpose of cloud APIs?

They allow infrastructure and services to be provisioned and controlled programmatically.

---

## Practice

### Question 1

You need a database but do not want to manage the underlying server yourself. What cloud concept becomes useful?

**Answer:** A managed database service.

### Question 2

Why might you deploy an application closer to its users?

**Answer:** To reduce network latency and potentially improve user experience.

### Question 3

Why are cloud APIs important?

**Answer:** They make infrastructure programmable and automatable.

---

## The Takeaway

A cloud provider is fundamentally an infrastructure operator that exposes computing resources and managed services through software.

Now we can compare this model with another approach:

> **What if a company decides to own and operate its infrastructure itself?**

That is **on-premise infrastructure**.
