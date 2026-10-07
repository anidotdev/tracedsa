# 01.8 — What Is a VPS?

You have already seen the important pieces:

```text
Physical server
      ↓
Virtualization
      ↓
Virtual machine
```

Now we can understand **VPS** without treating it like some new mysterious technology.

VPS stands for:

**Virtual Private Server**

At a high level, a VPS is a virtual server that you rent from a provider.

That is very close to the VM we just discussed.

---

## So is a VPS just a VM?

In many practical conversations, the terms are used almost interchangeably.

A VPS is essentially a virtualized server environment that is presented to a customer as their own server.

The exact product and isolation model can vary between providers, but the core idea is:

```text
Physical infrastructure
        ↓
Virtualization
        ↓
Your virtual server
```

You get control over an operating environment without owning the underlying physical hardware.

---

## Why the word "private"?

"Private" does not mean the physical server belongs only to you.

A physical host may run multiple customers' virtual environments.

The idea is that your VPS is logically separated from the other environments.

You might have:

```text
Physical Server
 ├── VPS A
 ├── VPS B
 ├── VPS C
 └── VPS D
```

From your perspective, VPS A is your server.

You control its operating system, installed software, users, files, and services.

---

## What do you usually get with a VPS?

A VPS commonly gives you resources such as:

```text
vCPU
RAM
Storage
Network connectivity
Public or private networking
Operating system
```

You can then install your own software.

For example:

```text
VPS
 ↓
Ubuntu
 ↓
Node.js
 ↓
Your API
```

Or:

```text
VPS
 ↓
Ubuntu
 ↓
Nginx
 ↓
Website
```

The VPS becomes the environment in which your application runs.

---

## VPS vs physical server

With a physical server:

```text
You
 ↓
Own or rent
 ↓
Entire physical machine
```

With a VPS:

```text
You
 ↓
Rent
 ↓
Virtual server
 ↓
Shared physical infrastructure
```

The VPS model is attractive because you do not need to dedicate an entire physical machine to a small workload.

---

## VPS vs cloud VM

This is where terminology can become confusing.

A VPS and a cloud VM can look almost identical from the user's perspective.

Both can give you:

```text
CPU
RAM
Storage
Operating system
Network
```

The difference is often in the surrounding platform.

A traditional VPS provider may focus primarily on simple virtual servers.

A large cloud provider may connect compute with:

```text
Networking
Object storage
Managed databases
Load balancers
Identity systems
Queues
Monitoring
Autoscaling
```

So a VPS is best thought of as a type of virtual server product, while cloud platforms usually provide a much broader infrastructure ecosystem.

---

## What can you do with a VPS?

Quite a lot.

You could use one for:

- a website
- a backend API
- a database
- a game server
- a development environment
- a VPN
- automation jobs
- background workers

For example, your application might look like:

```text
Internet
   ↓
VPS
   ↓
Node.js API
   ↓
PostgreSQL
```

A single VPS can even run multiple services, although production architecture often separates responsibilities as systems grow.

---

## Where does SSH fit?

Now SSH finally has a place in our mental model.

If your VPS is a remote machine somewhere in a data center, you need a way to access it.

One common method is **SSH**.

Conceptually:

```text
Your Laptop
     |
     | SSH
     v
    VPS
```

SSH lets you securely connect to the remote machine and work with its command line.

We will cover SSH properly later in the course.

The important thing right now is the dependency:

```text
Server
  ↓
Data center
  ↓
Cloud / VPS
  ↓
Remote machine
  ↓
SSH
```

SSH makes much more sense once you understand what the remote machine actually is.

---

## Why VPS products became popular

A VPS gives small teams and developers a convenient middle ground.

A physical server is more infrastructure than many small applications need.

A fully managed platform may hide too much control for certain workloads.

A VPS gives you:

```text
More control
+
Less physical infrastructure work
```

You still manage the operating system and software, but you do not manage the underlying physical machine.

---

## Mental Model

Think of a VPS like renting one apartment in a large building.

The building is the physical server.

Your apartment is your VPS.

You control your apartment, but you do not own the entire building.

---

## Feynman Check

### 1. What does VPS stand for?

Virtual Private Server.

### 2. Is a VPS a physical machine?

No. It is a virtualized server environment backed by physical infrastructure.

### 3. Can multiple VPSs exist on one physical server?

Yes.

### 4. What can you run on a VPS?

Websites, APIs, databases, workers, game servers, and many other applications.

### 5. Why would you use SSH with a VPS?

Because the VPS is usually a remote machine that you need to access securely.

---

## Practice

### Question 1

You rent a VPS with 4 vCPUs and 8 GB RAM. Did you buy a physical server?

**Answer:** No. You rented a virtual server backed by physical infrastructure.

### Question 2

Two customers have VPSs on the same physical server. Should their environments behave as independent machines?

**Answer:** Yes. Virtualization provides logical isolation between them.

### Question 3

Why might a VPS be enough for a small application?

**Answer:** It provides a controllable server environment without requiring the customer to operate physical hardware.

---

## The Takeaway

A VPS is essentially a rented virtual server.

It gives you a machine-like environment without requiring you to own the underlying physical machine.

Now we can zoom out again.

If one company operates the infrastructure underneath all of these virtual servers, **who are those companies?**

That leads us to cloud service providers.
