# 01.4 — Why Does the Cloud Exist?

At this point, you know what a server is, where servers physically live, and what cloud computing means.

Now we can ask a more useful question:

**Why did cloud computing become such a big thing?**

The answer is not simply "because companies wanted to rent servers."

Cloud computing solves several infrastructure problems that become painful as software systems grow.

---

## The old way: buy infrastructure first

Imagine you start a company.

You expect your application to eventually have 100,000 users.

How many physical servers should you buy?

You might think:

```text
"We expect a lot of users,
so let's buy enough hardware for growth."
```

Now suppose your application launches and only gets 500 users.

You bought infrastructure that sits mostly idle.

This creates a basic problem:

> You have to make infrastructure decisions before you know exactly what your workload will look like.

That is difficult.

---

## Underutilized hardware

Physical machines are not free.

Suppose a company buys a server capable of handling a large workload, but the application only uses a small portion of its capacity.

You might have:

```text
Server capacity
████████████████████

Actual usage
███
```

The remaining capacity still costs money.

This is called **underutilization**.

Large organizations can have huge amounts of infrastructure that are not always being used efficiently.

Cloud providers can improve this through shared infrastructure and virtualization.

Instead of every company buying its own dedicated physical machine, infrastructure can be allocated more dynamically.

---

## Capacity planning is hard

Traffic is not always predictable.

A website might normally receive:

```text
1,000 requests/minute
```

Then something goes viral and suddenly receives:

```text
100,000 requests/minute
```

Now the existing infrastructure may not be enough.

With purely physical infrastructure, increasing capacity can involve:

```text
Buy hardware
↓
Ship hardware
↓
Install hardware
↓
Configure hardware
↓
Add it to the network
```

That takes time.

Cloud systems make provisioning much more flexible.

---

## The opposite problem also exists

Sometimes you buy infrastructure for a traffic spike that only lasts an hour.

For example:

```text
Normal traffic
████

Traffic spike
████████████████████
```

After the spike disappears, the extra hardware is still sitting there.

Cloud systems make it possible to provision additional resources temporarily in many workloads.

This creates a more flexible relationship between:

```text
Workload
    ↕
Infrastructure
```

Instead of infrastructure being permanently fixed, it can become more dynamic.

---

## What if the hardware fails?

Physical hardware fails.

A disk can die.

A network card can fail.

A power supply can fail.

A server can stop responding.

If your entire application depends on one physical machine, a hardware failure can become an outage.

Cloud platforms provide infrastructure features that make it easier to build around failures.

For example, you can run multiple instances:

```text
Instance A ──┐
              ├── Application
Instance B ──┘
```

If one fails, the other can continue operating.

Cloud computing did not invent redundancy, but it makes many infrastructure patterns easier to provision.

---

## Infrastructure is expensive to operate

Owning infrastructure means more than buying machines.

You also need:

```text
Power
Cooling
Networking
Physical space
Maintenance
Replacement hardware
Security
Monitoring
Operations staff
```

At small scale, this may be manageable.

At large scale, it becomes a major operational problem.

Cloud providers specialize in operating infrastructure at scale.

That specialization is a major reason cloud computing exists.

---

## Global applications create another problem

Suppose your users live in:

```text
India
Germany
Brazil
United States
Japan
```

Running infrastructure in one physical location means some users will be physically far away.

Distance affects network latency.

Cloud providers operate infrastructure across different geographic regions.

That gives applications more options for placing workloads closer to users.

Again, the underlying concept is simple:

> Physical infrastructure has a location.

Cloud platforms expose that physical infrastructure through a programmable interface.

---

## The cloud changes who owns the problem

This is perhaps the best way to understand the cloud.

Without cloud computing:

```text
You
 ↓
Own hardware
 ↓
Manage hardware
 ↓
Run application
```

With cloud computing:

```text
Cloud provider
 ↓
Owns and operates infrastructure

You
 ↓
Use infrastructure
 ↓
Run application
```

The infrastructure problem does not disappear.

The ownership boundary changes.

The provider takes responsibility for many lower layers, while you remain responsible for your application and the layers you control.

---

## Why not just have everyone build their own data centers?

Large companies sometimes do.

Companies like Google, Microsoft, and Amazon operate enormous physical infrastructure because their scale justifies it.

But most companies cannot justify building a global infrastructure platform.

Cloud providers essentially turn infrastructure into a service that other organizations can consume.

Instead of every company recreating the same infrastructure, many organizations can use infrastructure operated by specialized providers.

---

## The cloud also speeds up experimentation

This is one of the biggest practical advantages.

Suppose you want to test a new application.

You may not know how much compute it needs.

With physical hardware, experimentation can be expensive and slow.

With cloud infrastructure, you can often provision a small environment, test the application, and change the resources later.

That makes infrastructure more flexible during development.

---

## Cloud does not automatically mean cheaper

This is important.

People sometimes say:

> "Cloud is cheaper."

That is not always true.

Cloud can reduce upfront costs and make infrastructure more flexible, but large workloads can also become expensive.

A badly designed cloud system can waste money.

You still need to understand:

```text
Capacity
Usage
Pricing
Architecture
Scaling
```

The real value is not simply "cheap servers."

The real value is **flexibility and abstraction**.

---

## Mental Model

Imagine renting an apartment instead of constructing a building.

You do not own the underlying structure.

You pay to use it.

Someone else handles much of the infrastructure.

That analogy is not perfect, but it captures an important idea:

> You consume infrastructure without necessarily owning the entire infrastructure yourself.

Cloud computing takes that idea into software infrastructure.

---

## Feynman Check

### 1. Why is buying physical infrastructure difficult?

Because you must predict capacity, pay upfront, maintain hardware, and deal with failures and operational complexity.

### 2. What is underutilization?

Having more infrastructure capacity than your application actually uses.

### 3. Why is scaling difficult with physical servers?

Because adding capacity can require purchasing, installing, networking, and configuring additional hardware.

### 4. Does cloud remove infrastructure problems?

No. It changes who operates much of the infrastructure and how you consume it.

---

## Practice

### Question 1

A website normally needs one server but occasionally needs ten during traffic spikes. Why might cloud infrastructure be useful?

**Answer:** Because resources can be provisioned more dynamically instead of permanently owning ten physical servers.

### Question 2

A company buys 20 physical servers but usually uses only 10% of their capacity. What problem does it have?

**Answer:** Underutilization.

### Question 3

Why can cloud infrastructure help global applications?

**Answer:** Cloud providers operate infrastructure in multiple geographic locations, giving applications more choices for where workloads run.

---

## The Takeaway

Cloud computing exists because operating physical infrastructure is expensive, difficult, and often inflexible.

The cloud gives organizations a way to consume infrastructure more dynamically.

But there is still one question we have not answered:

> **How can one physical server provide resources to many different users?**

That leads us to **physical servers vs virtual machines**.
