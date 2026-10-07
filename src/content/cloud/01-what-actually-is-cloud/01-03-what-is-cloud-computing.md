# 01.3 — What Is Cloud Computing?

Now we have two important pieces.

We know what a server is.

We know that servers physically live somewhere, usually inside data centers.

So now we can ask the bigger question:

**What is cloud computing?**

The simplest useful answer is:

> Cloud computing is the ability to use computing resources and services over a network, usually the Internet, without owning and managing all of the underlying physical infrastructure yourself.

The sentence is bigger than "someone else's computer", but that phrase is still a useful starting point.

---

## Before cloud computing

Imagine you want to launch a website.

You need a machine to run it.

One option is to buy a physical server.

So you might have to:

```text
Buy hardware
    ↓
Put it somewhere
    ↓
Connect power
    ↓
Connect networking
    ↓
Install an operating system
    ↓
Maintain the machine
    ↓
Run your application
```

The software is only one part of the problem.

You also own the infrastructure problem.

---

## What cloud computing changes

With cloud computing, another company operates the underlying infrastructure.

You interact with it through software.

Instead of physically installing a server, you can request resources.

For example:

```text
I need:
2 CPU cores
4 GB RAM
50 GB storage
```

The cloud platform handles the infrastructure required to provide that environment.

You can then run your application on it.

Conceptually:

```text
You
 |
 | request resources
 v
Cloud Provider
 |
 | infrastructure
 v
Compute Resource
 |
 v
Your Application
```

The important thing is not that the cloud creates computers from nothing.

The important thing is that it gives you **programmable access to computing infrastructure**.

---

## Cloud is more than rented servers

This distinction matters.

At first, cloud computing can look like:

> "Rent a server."

That is one part of it.

But modern cloud platforms offer much more.

You can typically find services for:

```text
Compute
Storage
Databases
Networking
Queues
Caching
Authentication
Monitoring
Machine learning
Serverless execution
```

You do not necessarily have to build each underlying system yourself.

That is a major part of the cloud value proposition.

---

## On-demand resources

One of the biggest differences between traditional infrastructure and cloud computing is **on-demand provisioning**.

Suppose your application suddenly needs more capacity.

With physical infrastructure, you may need to purchase and install more machines.

With cloud infrastructure, you can often request additional resources through an API, dashboard, or command line.

Conceptually:

```text
Traffic increases
      ↓
Need more capacity
      ↓
Request more resources
      ↓
Cloud platform provisions them
```

The exact process depends on the service, but the general idea is that infrastructure becomes much more programmable.

---

## Pay for what you use

Cloud providers commonly use usage-based or resource-based pricing.

Instead of buying a physical machine upfront, you can often pay for the resources you consume.

For example, a provider might charge based on things such as:

- compute time
- storage
- network usage
- requests
- database capacity

This changes the economics of infrastructure.

A small project can start with relatively little infrastructure and grow later.

You do not necessarily need to purchase a huge amount of hardware on day one.

---

## The cloud is an abstraction

This is one of the most important ideas in this entire course.

When you use cloud infrastructure, you usually don't think about the physical implementation.

You think:

```text
CPU
RAM
Storage
Network
Database
```

The provider takes care of many lower-level concerns for you.

You are interacting with an abstraction.

A simplified view is:

```text
Your Application
       ↓
Cloud Service
       ↓
Cloud Infrastructure
       ↓
Physical Hardware
       ↓
Data Center
```

You are still ultimately using physical hardware.

The cloud simply lets you interact with it at a higher level.

---

## Why developers like this

Suppose you are one person building a SaaS product.

Your priorities are probably things like:

```text
Build the application
Ship features
Get users
Fix bugs
```

You probably do not want your week to look like:

```text
Order server
Rack server
Replace failed disk
Configure power
Install network switch
Maintain cooling
```

Cloud computing moves much of that infrastructure burden to the provider.

That does not mean you have no infrastructure responsibilities.

It means the boundary of responsibility changes.

---

## Cloud computing is not magic

The phrase "the cloud" can make it sound like everything just happens somewhere abstract.

It doesn't.

Every cloud resource eventually depends on:

```text
CPU
Memory
Storage
Networks
Electricity
Physical machines
Data centers
People maintaining them
```

The difference is that you generally interact with these things through APIs and services instead of physically managing them.

This is an important mindset for anyone learning cloud.

Do not think:

> "The cloud handles everything."

Think:

> "The cloud provider operates layers of infrastructure for me, and I interact with those layers through software."

---

## Example: putting a backend online

Suppose you build a Node.js API.

Locally you might have:

```text
Your laptop
   ↓
Node.js process
   ↓
localhost:3000
```

You want other people to access it.

A cloud deployment might look conceptually like:

```text
User
  ↓
Internet
  ↓
Cloud network
  ↓
Compute resource
  ↓
Node.js application
  ↓
Database
```

You still have an application.

The major difference is that the infrastructure supporting it is now running on infrastructure provided through a cloud platform.

---

## Why this matters for the rest of the course

Cloud computing gives us a new way to think about infrastructure.

Instead of asking:

> "How do I physically build the infrastructure?"

we can often ask:

> "What resources does my application need, and which cloud services provide them?"

That shift is extremely important.

---

## Mental Model

Think of electricity.

You do not normally build a power plant because you want to run a laptop.

You connect your device to an existing electrical infrastructure and consume the resource you need.

Cloud computing is not exactly the same thing, but the mental model is useful:

```text
Infrastructure exists
       ↓
You request resources
       ↓
You consume resources
       ↓
Provider operates the underlying infrastructure
```

---

## Feynman Check

### 1. What is cloud computing?

Using computing resources and services over a network without having to own and manage all of the physical infrastructure yourself.

### 2. Does cloud computing mean there is no physical hardware?

No. The hardware still exists in physical data centers.

### 3. Why is cloud computing useful?

It gives you programmable access to infrastructure without requiring you to build and operate all of that infrastructure yourself.

### 4. Is cloud just rented VPS machines?

No. Compute is one part of cloud computing. Modern cloud platforms provide many other managed services.

---

## Practice

### Question 1

Why might a small startup prefer cloud infrastructure to buying physical servers?

**Answer:** It can start small, avoid large upfront infrastructure costs, and provision resources as needed.

### Question 2

A developer creates a new server through a cloud dashboard. Did the cloud provider create a new physical computer?

**Answer:** Usually no. The platform allocated resources from existing physical infrastructure.

### Question 3

What does it mean to say that cloud computing is an abstraction?

**Answer:** You interact with higher-level resources and services while the provider manages much of the underlying physical infrastructure.

---

## The Takeaway

Cloud computing is fundamentally about **consuming computing infrastructure as a service**.

The physical infrastructure still exists.

The difference is that you no longer need to own and operate all of it yourself.

Once that is understood, the next question is:

> **Why did we need the cloud in the first place?**
