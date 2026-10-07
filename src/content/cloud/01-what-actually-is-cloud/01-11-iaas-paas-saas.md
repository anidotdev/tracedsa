# 01.11 — IaaS, PaaS & SaaS

We have reached the final major concept in this chapter.

So far, we have moved through:

```text
Server
  ↓
Data Center
  ↓
Cloud
  ↓
Virtualization
  ↓
VM
  ↓
VPS
  ↓
Cloud Provider
  ↓
On-Premise vs Cloud
```

Now we need one more idea:

**How much of the infrastructure do you actually want to manage?**

This is where the terms **IaaS, PaaS, and SaaS** become useful.

---

## The basic idea

These three models are different levels of abstraction.

As you move from IaaS to SaaS, the provider manages more of the underlying system for you.

A simple mental model is:

```text
More control
     ↑
    IaaS
     ↓
    PaaS
     ↓
    SaaS
     ↓
Less infrastructure to manage
```

The trade-off is straightforward:

> More abstraction usually means less infrastructure work, but also less direct control.

---

## IaaS — Infrastructure as a Service

IaaS stands for:

**Infrastructure as a Service**

With IaaS, the provider gives you infrastructure resources.

For example:

```text
Compute
Storage
Networking
```

You may create a virtual machine and then manage the operating system and software yourself.

Conceptually:

```text
Cloud Provider
 ├── Physical hardware
 ├── Data center
 ├── Networking
 └── Virtualization

You
 ├── Operating system
 ├── Runtime
 ├── Application
 └── Data
```

This gives you a lot of control.

---

## Example of IaaS

Imagine you rent a virtual machine.

You get:

```text
2 vCPU
4 GB RAM
50 GB disk
```

You install:

```text
Ubuntu
Node.js
Nginx
Your application
```

You manage the machine.

You decide what packages are installed.

You configure the operating system.

You control the application environment.

This is very close to the VPS/VM experience we already discussed.

---

## PaaS — Platform as a Service

PaaS stands for:

**Platform as a Service**

Here, the provider manages more of the infrastructure and runtime environment for you.

Instead of thinking:

> "Give me a VM."

you might think:

> "I have an application. Run it."

Conceptually:

```text
Cloud Provider
 ├── Physical hardware
 ├── Data center
 ├── Virtualization
 ├── Operating system
 ├── Runtime
 └── Platform

You
 ├── Application
 └── Data
```

The exact boundary differs between services, but the general idea is that you manage less infrastructure.

---

## Why would you want PaaS?

Suppose you have a Node.js application.

You might not care about managing:

```text
Operating system patches
Server setup
Runtime installation
Some networking details
```

You mainly care about:

```text
My application
My code
My environment variables
My database connection
```

A platform service can take care of more of the infrastructure around your application.

This makes deployment simpler.

---

## SaaS — Software as a Service

SaaS stands for:

**Software as a Service**

This is the model most normal users interact with every day.

You do not manage the infrastructure.

You use the software.

Examples include:

```text
Gmail
Notion
Figma
Google Docs
```

You open the application and use it.

You do not manage:

```text
Physical servers
VMs
Operating systems
Runtime
Application deployment
```

The provider handles those layers.

---

## A simple responsibility model

You can think about the three models like this:

```text
                 IaaS        PaaS        SaaS

Physical HW       Provider    Provider    Provider
Networking        Provider    Provider    Provider
Virtualization    Provider    Provider    Provider
OS                You         Provider    Provider
Runtime           You         Provider    Provider
Application       You         You         Provider
Data              You         You         Provider-managed service
```

This table is intentionally simplified.

The exact responsibility boundary depends on the specific product.

The important idea is the direction:

> As you move from IaaS → PaaS → SaaS, the provider manages more.

---

## IaaS gives you more control

Suppose you need a custom operating system configuration.

IaaS is useful because you have much more control over the machine.

But with that control comes responsibility.

You may need to handle:

```text
Updates
Security
Configuration
Monitoring
Backups
Runtime
Application
```

More freedom means more work.

---

## PaaS reduces infrastructure work

With PaaS, the platform handles more of the environment.

You can focus more heavily on application development.

The trade-off is that you may have fewer low-level configuration options.

This is often a good trade when your main goal is:

> Ship the application instead of managing servers.

---

## SaaS hides almost everything

With SaaS, you are primarily the user of the application.

You might configure:

```text
Account
Settings
Data
Permissions
```

But you do not manage the infrastructure underneath.

That is why SaaS can feel completely different from IaaS.

---

## This is not a quality ranking

Do not think:

```text
IaaS = advanced
PaaS = easier
SaaS = beginner
```

That is not the point.

These are simply different abstraction levels.

A large engineering team may intentionally use managed PaaS services because it saves operational work.

A company may use IaaS because it needs control.

A normal user may use SaaS because they simply need a finished product.

The correct choice depends on the problem.

---

## An example: building a website

Imagine you want to create an application.

### IaaS approach

You get a VM.

Then you:

```text
Configure OS
Install runtime
Install server
Deploy application
Configure network
Monitor system
```

### PaaS approach

You give the platform your application.

The platform handles more of:

```text
Server
OS
Runtime
Deployment environment
```

You focus more on:

```text
Application
```

### SaaS approach

You don't build the platform at all.

You simply use something that already exists.

For example, if your requirement is "I need a collaborative document editor", you might use Google Docs instead of building one.

That is SaaS.

---

## Why these models matter

These terms help us communicate about infrastructure.

When an engineer says:

> "We're using IaaS."

they are implying a particular responsibility boundary.

When they say:

> "We're using a managed PaaS."

they are saying the provider is handling more infrastructure.

When they say:

> "This is SaaS."

the user is consuming a finished software product.

The terms are useful because they tell us roughly **where the infrastructure boundary is**.

---

## Shared responsibility

There is one final idea worth remembering.

Cloud does not mean:

> "The provider is responsible for everything."

Responsibility is shared.

A simplified example:

```text
Physical hardware
      Provider

Operating system
      Depends on service

Application
      You

Data
      You
```

The exact boundary changes between IaaS, PaaS, and SaaS.

This is why security and operations require you to understand what the provider is actually managing for you.

We will explore this much more deeply later.

---

## Mental Model

Think about cooking.

### IaaS

Someone gives you a kitchen.

You manage almost everything else.

### PaaS

Someone gives you a kitchen with much of the equipment already configured.

You focus more on cooking.

### SaaS

Someone gives you the finished meal.

You just consume it.

The analogy is imperfect, but the abstraction idea is useful.

---

## Feynman Check

### 1. What does IaaS mean?

Infrastructure as a Service.

### 2. What does PaaS mean?

Platform as a Service.

### 3. What does SaaS mean?

Software as a Service.

### 4. Which gives you the most infrastructure control?

Generally, IaaS.

### 5. Which one provides the finished software product?

SaaS.

### 6. What changes as you move from IaaS to SaaS?

The provider takes responsibility for more layers of the stack.

---

## Practice

### Question 1

You rent a virtual machine and install Ubuntu, Node.js, and Nginx yourself. What model does this most closely resemble?

**Answer:** IaaS.

### Question 2

You deploy source code to a platform and the provider handles much of the server and runtime environment. What model does this resemble?

**Answer:** PaaS.

### Question 3

You use Figma in your browser without managing any of its infrastructure. What model does this resemble?

**Answer:** SaaS.

### Question 4

Does SaaS mean you have no responsibility at all?

**Answer:** No. You may still be responsible for things such as your account, permissions, and data, while the provider manages the underlying application and infrastructure.

---

## The Takeaway

IaaS, PaaS, and SaaS are different levels of abstraction.

```text
IaaS
↓
You manage more

PaaS
↓
Provider manages more

SaaS
↓
Provider manages almost the entire application stack
```

The main question is not:

> "Which one is best?"

It is:

> **How much of the infrastructure do I actually want to manage?**
