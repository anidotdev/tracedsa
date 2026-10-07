# 01.3 — What Is Cloud Computing?

Now we have two things.

We know what a server is. It's a machine or system providing some service to other machines over a network.

And we know that those servers need to exist somewhere physically; usually, that means inside data centers

Now we can ask the big question: What is cloud computing?

The most simple answer is that cloud computing is the ability to consume computing resources and services over a network (usually the Internet) without owning and operating all of the underlying physical infrastructure yourself.

You'll hear people say "the cloud is just someone else's computer", which is nice but it's largely incomplete

The interesting part is that you can request, configure, and consume those computing infrastructure services through software rather than physically buying and operating everything yourself.

---

## Before cloud

Imagine you wanted to launch a website. Your application needs somewhere to run, so you need some sort of machine to host it. One option is to purchase a physical server and operate it yourself.

You might not have thought about "operate it yourself" as much as you thought about "buy a server". There's a lot that comes with that latter phrase, however:

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

It's just one part of the problem. You're also maintaining the infrastructure supporting the software. The server can fail, the disk can break, the network can misbehave. You need power and proper cooling. You need to have a physical place to keep the machine. You need more hardware if your application suddenly gets more traffic.

So before cloud, the question was often "How do I build and operate the infrastructure my application needs?"

That's a much bigger question than "how do I write the application?"

---

## What cloud changes

Cloud changes that relationship

Instead of buying a physical machine and operating all the infrastructure yourself, you can use infrastructure operated by another company. You interface that infrastructure through software, for example, you might be saying "I need 2 CPU cores, 4 GB RAM and 50 GB storage", and you make that request through some interface provided by the cloud provider.

The provider already has physical infrastructure, and it can allocate some of its resources and give you a computing environment for your application to run in.

Conceptually:

```text

You      |  request resources    v

Cloud Provider |  infrastructure     v

Compute Resource |             v

Your Application

```

The interesting thing is that the cloud didn't pull a computer out of thin air. The physical infrastructure has already existed. What the cloud gives you is a programmable interface to that physical infrastructure. That's the idea to keep in your head.

---

## Cloud is more than rented servers

At the beginning, cloud can look like "rent a server".

Yes, but if you stop there, you're going to miss most of what makes cloud platforms useful.

A modern cloud provider can give you services for anything related to:

```text

Compute

Storage

Databases

Networking

Queues

Caching

Authentication

Monitoring

Serverless execution

```

So instead of building everything infrastructure component yourself, you can often consume a service which already provides it. Imagine you're building an application. You might need:

```text

Compute → run your backend

Database → store application data

Storage → store files

Cache → avoid repeated work

Queue → move background jobs

Monitoring → understand what is happening

```

The cloud provider can give you services for these different jobs, changing the way you build systems. Instead of thinking about every infrastructure piece as a physical machine you need to buy and maintain, you can think of resources and services.

---

## On-demand resources

One of the biggest differences between traditional infrastructure and the cloud is that the cloud provides on-demand infrastructure provisioning.

Say your application normally has a small amount of traffic, but one day something goes viral. You may have gone from:

```text

Normal traffic████

```

to:

```text

Traffic spike████████████████████

```

With physical infrastructure, increasing your capacity can mean buying and installing more machines. With cloud infrastructure, you can usually request more resources through an API, dashboard or command line.

Conceptually:

```text

Traffic increases   ↓

Need more capacity   ↓

Request more resources   ↓

Cloud platform provisions them

```

The exact mechanism depends on the service. Sometimes you manually create more resources. Sometimes the platform can scale resources automatically.

The important idea is that infrastructure becomes much more programmable and flexible.

This is a major shift. Infrastructure is no longer something which exists as a fixed collection of physical machines, but it can become something which software can create, modify, and remove.

---

## Paying for resources instead of buying everything upfront

One of the important parts of cloud computing is the way in which cloud providers bill you.

Providers usually charge based on the resources or services you actually used. Charges often depend on things such as:

```text

Compute time

Storage

Network usage

Requests

Database capacity

```

This changes the economics of infrastructure. Imagine you are building a small project. You don't necessarily need to buy a large physical server before knowing whether the project will even work. You can start with a relatively small amount of infrastructure and increase it later as the workload grows.

That does not mean cloud is always cheap. It isn't. A badly designed cloud system can waste a lot of money, and large workloads can become very expensive.

The important advantage is flexibility. You can get started without having to purchase a huge amount of physical infrastructure on day one.

---

## The cloud is an abstraction

This is probably the most important idea in this chapter.

When you use cloud infrastructure, you normally don't care about the physical implementation. You think:

```text

CPURAMStorageNetworkDatabase

```

You don't normally think:

```text

Rack 17Physical CPUPhysical diskNetwork switchPower distributionCooling system

```

The provider abstracts away those lower-level details. A simplified view looks like:

```text

Your Application    ↓

Cloud Service    ↓

Cloud Infrastructure    ↓

Physical Hardware    ↓

Data Center

```

Physical hardware still exists. The cloud hasn't removed it, it has simply given you a higher-level interface for using it. It's the same general idea we saw in the previous lesson with data centers. The physical world still exists underneath the abstraction. You just interact with it differently.

---

## Why developers like it

Imagine you're one person building a SaaS product. Your actual work probably looks like:

```text

Build the application

Ship features

Fix bugs

Get users

Improve the product

```

You probably don't want your week to look like:

```text

Order server

Rack server

Replace failed disk

Configure power

Install network switch

Maintain cooling

```

Cloud computing moves much of that infrastructure burden to the provider.

That doesn't mean the provider takes care of everything. You still have responsibilities. You might still have to manage:

```text

Operating system

Application

Configuration

Credentials

Security

Data

```

The exact boundary depends on the service you are using.

The important point is that the responsibility boundary changed. Instead of owning the entire infrastructure stack, you consume part of that stack as a service.

---

## Cloud computing is not magic

This is worth being very clear about. The phrase "the cloud" makes it sound like applications simply exist somewhere in an abstract place. They don't. Every cloud resource eventually depends on physical things:

```text

CPUMemoryStorageNetworksElectricityPhysical machinesData centersPeople maintaining them

```

The cloud does not make those things disappear. It gives you a way to interact with them through software instead of physically managing all of them yourself.

Don't think:

```text

"The cloud handles everything."

```

Think:

```text

"The cloud provider operates layers of infrastructure for me, and I interact with those layers through software."

```

That mental model will save you a lot of confusion later.

---

## A simple example: putting a backend online

Imagine you build a Node.js API. On your laptop, you might have:

```text

Your laptop  ↓

Node.js process  ↓

localhost:3000

```

This works while you're developing locally, but other people on the Internet cannot simply access `localhost:3000` on your machine. You need to put the application somewhere reachable. A cloud deployment might look conceptually like:

```text

User ↓

Internet ↓

Cloud network ↓

Compute resource ↓

Node.js application ↓

Database

```

Your application has not fundamentally changed. It is still a Node.js application. What changed is where it runs and who provides the infrastructure around it. Instead of your laptop providing the machine, network, power, and physical environment, those layers are provided through a cloud platform. And now other people can reach the application over the Internet. We will open up the networking part of this much more carefully in later chapters.

---

## The important shift in thinking

Cloud computing gives us a different way to think about infrastructure.

Instead of asking:

```text

"How do I physically build the infrastructure?"

```

You can ask:

```text

"What resources does my application need, and which cloud services provide them?"

```

That shift is extremely important. Instead of thinking:

```text

"I need to buy a server."

```

You might think:

```text

"I need compute."

```

Instead of:

```text

"I need to build a storage system."

```

You might think:

```text

"I need object storage."

```

Instead of:

```text

"I need to install and maintain a database server."

```

You might think:

```text

"I need a managed database."

```

You are moving from thinking about physical machines to thinking about services and capabilities.

That's one of the biggest conceptual changes introduced by cloud computing.

---

## Mental Model

Think about electricity. You probably don't build a power plant because you want to run your laptop. The power infrastructure already exists. You connect your device to it and consume the resource you need.

Cloud computing is not exactly the same thing, but the mental model is useful:

```text

Infrastructure exists    ↓

You request resources    ↓

You consume resources    ↓

Provider operates the underlying infrastructure

```

You care about the resource your application needs. The provider takes care of much of the infrastructure required to deliver that resource.

---

## Feynman Check

Close the lesson and explain these in your own words. Do not try to repeat the definitions exactly. The goal is to see whether you actually understand the idea.

### 1. What is cloud computing?

Explain it without saying only "someone else's computer".

### 2. What changed when cloud computing became available?

Think about ownership, provisioning, and infrastructure management.

### 3. Does cloud computing remove physical hardware?

Explain where the hardware actually went.

### 4. Why is the cloud an abstraction?

Explain what you see when you use a cloud service and what exists underneath it.

### 5. Why can cloud infrastructure be more flexible than buying physical servers?

Think about provisioning and changing resources when your workload changes.

### 6. Does using the cloud mean you have no infrastructure responsibilities?

Explain what the provider manages and what you may still have to manage.

If you can explain those ideas in your own words, you understand the foundation.

---

## Practice

### Question 1

Why might a small startup prefer cloud infrastructure to buying physical servers?

Answer: It can start with a small amount of infrastructure, avoid large upfront hardware costs, and provision additional resources as the workload grows.

### Question 2

A developer creates a new server through a cloud dashboard. Did the provider create a new physical computer at that moment?

Answer: Usually no. The physical infrastructure already exists. The cloud platform allocates resources from that infrastructure and presents them as a usable computing resource.

### Question 3

What does it mean to say that cloud computing is an abstraction?

Answer: You interact with higher-level resources and services while the provider manages much of the lower-level physical infrastructure required to deliver them.

### Question 4

A developer has a Node.js API running on their laptop. They move it to a cloud compute resource. Did the Node.js application itself become a different kind of software?

Answer: No. The application can remain the same. What changed is the environment and infrastructure on which it runs.

### Question 5

Why is "the cloud is someone else's computer" useful but incomplete?

Answer: Because the cloud does use someone else's physical infrastructure, but modern cloud computing is more than renting computers. It provides programmable access to many infrastructure resources and managed services.

---

## The Takeaway

Cloud computing is fundamentally about consuming computing infrastructure and services as a resource instead of owning and operating all of the underlying infrastructure yourself.

The physical infrastructure still exists. The servers still need electricity. The data centers still need cooling. The networks still exist. The difference is that you interact with those layers through software and services rather than managing every physical piece yourself. That gives you something very useful: infrastructure that can be requested, configured, and consumed programmatically.

Once you understand that, the next question becomes pretty natural: Why did we actually need the cloud in the first place?

That leads us to the problems traditional infrastructure had to deal with.
