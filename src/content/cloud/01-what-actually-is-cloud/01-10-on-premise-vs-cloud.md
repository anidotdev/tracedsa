# 01.10 — On-Premise vs Cloud

We now know what cloud computing means.

But cloud is not the only way to run infrastructure.

A company can also choose to **own and operate its own infrastructure**.

This is commonly called **on-premise**, or simply **on-prem**.

---

## What does on-premise mean?

On-premise infrastructure means the organization owns or directly operates the infrastructure used for its workloads.

That could include:

```text
Physical servers
Storage
Network equipment
Data center facilities
Power systems
Cooling
```

The exact arrangement can vary, but the key idea is:

> The organization has much more direct ownership and control over the physical infrastructure.

---

## A simple comparison

### On-premise

```text
Your company
    ↓
Owns / operates
    ↓
Physical infrastructure
    ↓
Application
```

### Cloud

```text
Cloud provider
    ↓
Owns / operates
    ↓
Physical infrastructure
    ↓
Cloud services
    ↓
Your application
```

The major difference is the **ownership and responsibility boundary**.

---

## Why would a company choose on-prem?

Cloud is not automatically the correct answer for every organization.

There can be valid reasons to operate infrastructure yourself.

For example:

### Control

A company may want very direct control over the infrastructure.

### Compliance

Some workloads may have strict requirements around data location or infrastructure management.

### Specialized hardware

A company may need hardware that is difficult or expensive to obtain through a standard cloud service.

### Predictable large workloads

A company running a very large and stable workload may find owning infrastructure economically attractive.

### Existing infrastructure

An organization may already have a large data center and a long history of operating it.

---

## Why would a company choose cloud?

Cloud provides different advantages.

It can offer:

- faster provisioning
- less physical infrastructure management
- easier experimentation
- geographic infrastructure options
- managed services
- flexible capacity

For a small team, these advantages can be extremely valuable.

---

## Infrastructure responsibility

This is one of the biggest differences.

With on-premise infrastructure, your organization may need to handle:

```text
Hardware
Power
Cooling
Networking
Physical security
Operating systems
Applications
```

With cloud infrastructure, the provider handles many lower layers.

For example:

```text
Cloud provider
 ├── Data center
 ├── Physical servers
 ├── Physical networking
 └── Power / cooling

You
 ├── Application
 ├── Configuration
 └── Data
```

The exact division depends on the service.

---

## Cost is more complicated than "cloud vs hardware"

People sometimes compare:

> Buying a server = expensive  
> Cloud = cheap

Real infrastructure economics are not that simple.

On-premise has significant **capital expenditure**.

You may need to buy:

```text
Servers
Networking
Storage
Facilities
```

Cloud tends to shift more spending toward **operational expenditure** and usage-based costs.

But cloud resources can become expensive at large scale, especially if poorly managed.

So the correct question is not:

> "Which one is cheaper?"

It is:

> "Which model makes more sense for this workload and organization?"

---

## Scaling

This is another major difference.

Suppose an on-premise application suddenly needs much more compute.

You may have to acquire and install more hardware.

With cloud infrastructure, you can often provision additional resources much more quickly.

This does not mean cloud scaling is automatic by default.

It means the infrastructure is generally more programmable.

---

## Hybrid infrastructure

Real companies do not always choose one side completely.

They may use both.

This is called **hybrid infrastructure** or **hybrid cloud**.

For example:

```text
Company Data Center
        |
        +------+
               |
            Network
               |
          Cloud Provider
```

Some workloads may remain on-premise while others run in the cloud.

This can be useful for organizations with legacy infrastructure, regulatory constraints, or specific technical requirements.

---

## Multi-cloud

A company can also use multiple cloud providers.

For example:

```text
Company
 ├── AWS
 ├── Azure
 └── Google Cloud
```

There can be strategic reasons for this, although multi-cloud also introduces additional complexity.

You generally should not use multiple clouds just because "more is better."

Every additional platform adds operational knowledge, integration work, security concerns, and cost considerations.

---

## The real trade-off

The deeper lesson is that infrastructure architecture is about **trade-offs**.

On-premise provides more direct ownership.

Cloud provides more abstraction and flexibility.

Neither model is universally superior.

The right choice depends on:

```text
Workload
Cost
Control
Compliance
Scale
Team
Hardware requirements
Operational complexity
```

---

## Mental Model

Think about running a restaurant.

You could own the building, kitchen equipment, power systems, and everything else.

Or you could rent a fully equipped facility and focus more on cooking.

The second model does not make the infrastructure disappear.

It changes who operates it and how much of it you have to manage.

That is similar to the cloud vs on-premise distinction.

---

## Feynman Check

### 1. What is on-premise infrastructure?

Infrastructure owned or directly operated by the organization itself.

### 2. What is the main difference between on-premise and cloud?

The ownership and responsibility boundary.

### 3. Is cloud always cheaper?

No.

### 4. Can an organization use both?

Yes. That is common in hybrid architectures.

### 5. Why might an organization prefer on-premise?

It may need more control, specialized hardware, specific compliance requirements, or already have significant infrastructure.

---

## Practice

### Question 1

A company already owns a large data center and has a stable workload. Is cloud automatically the better choice?

**Answer:** No. The existing infrastructure and workload economics may make on-premise reasonable.

### Question 2

A startup needs to launch globally but has almost no infrastructure team. Why might cloud be attractive?

**Answer:** It can provide infrastructure and managed services without requiring the startup to build and operate a physical infrastructure platform.

### Question 3

A company keeps its financial database on-premise but runs its public application in the cloud. What kind of setup is this?

**Answer:** A hybrid architecture.

---

## The Takeaway

On-premise and cloud are two different ways of obtaining and operating infrastructure.

The important difference is not simply where the servers are.

It is **who owns, operates, and is responsible for the different layers**.

That leads naturally to the next question:

> **How much infrastructure do you want to manage yourself?**

That is where **IaaS, PaaS, and SaaS** come in.
