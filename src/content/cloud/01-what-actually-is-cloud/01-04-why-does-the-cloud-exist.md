# 01.4 — Why Does the Cloud Exist?

At this point, we know what a server is, where servers physically live, and what cloud computing means.

So now we can ask the more useful question:

**Why did cloud computing become such a big thing in the first place?**

It is tempting to answer:

> "Because companies wanted to rent servers."

That is true, but it misses the bigger picture.

The real reason cloud computing became important is that **operating physical infrastructure becomes difficult when software systems grow**.

A small application and a global application do not have the same infrastructure problems. As traffic grows, hardware requirements become harder to predict, failures become more important, operations become more expensive, and building capacity in advance becomes a serious business decision.

Cloud computing changes how organizations deal with those problems.

---

## The old way: buy infrastructure first

Imagine you are starting a company and building an application.

You expect that the application might eventually have 100,000 users.

Now comes a very practical question:

**How many physical servers should you buy?**

You could try to estimate the future and buy enough hardware for the expected workload.

Maybe you decide:

```text
"We expect a lot of users,
so let's buy enough hardware for growth."
```

But now imagine the application launches and you only get 500 users.

You have spent money on infrastructure that is mostly sitting there doing nothing.

And this creates a problem that is easy to miss:

> You often have to make infrastructure decisions before you actually know what the workload will look like.

That is hard because software usage is not always predictable.

You might build something that nobody uses.

You might build something that suddenly gets millions of users.

You might have a workload that is tiny most of the time but enormous for a short period.

The physical infrastructure has to exist before the workload can use it.

---

## Underutilized hardware

Physical machines are expensive, and their capacity does not disappear just because you are not using it.

Suppose a company buys a server capable of handling a large workload, but the application only needs a small portion of that capacity.

You might have:

```text
Server capacity
████████████████████

Actual usage
███
```

The machine still exists.

The company still paid for it.

It still consumes power and needs space, cooling, networking, maintenance, and monitoring.

This is called **underutilization**.

The problem becomes particularly interesting at scale because organizations can end up with large amounts of infrastructure that are not being used efficiently all the time.

Cloud computing can improve this by allowing infrastructure to be allocated more dynamically and by allowing many workloads to share the same underlying physical infrastructure.

That second idea will become especially important when we get to **virtualization**.

For now, just remember:

> The physical capacity of a machine exists whether your application uses it or not.

---

## Capacity planning is hard

Now consider the opposite problem.

Suppose your website normally receives:

```text
1,000 requests/minute
```

That is manageable with your current infrastructure.

Then something happens.

Your application gets mentioned by a large account.

A post goes viral.

A product launch starts.

Suddenly the traffic becomes:

```text
100,000 requests/minute
```

Your existing infrastructure may not be enough anymore.

With purely physical infrastructure, increasing capacity could involve something like:

```text
Buy hardware
    ↓
Ship hardware
    ↓
Install hardware
    ↓
Configure hardware
    ↓
Connect it to the network
    ↓
Deploy the workload
```

That takes time.

The problem is not that physical servers are bad.

The problem is that **physical infrastructure is relatively slow to change**.

The software can scale very quickly.

The infrastructure underneath it may not.

That mismatch becomes a serious problem when demand changes quickly.

---

## The opposite problem also exists

Suppose you solved the previous problem by buying enough hardware for your biggest expected traffic spike.

Now imagine your application only reaches that traffic level for one hour every week.

For most of the time, your infrastructure looks like this:

```text
Normal traffic
████
```

And during the spike:

```text
Traffic spike
████████████████████
```

You bought enough hardware for the second situation, but you spend most of your time in the first.

After the spike disappears, the extra hardware is still sitting there.

This gives us two opposite infrastructure problems:

```text
Too little capacity
        ↓
You cannot handle the workload

Too much capacity
        ↓
You pay for infrastructure you are not using
```

Cloud systems make it possible to change capacity more dynamically in many workloads.

So the relationship between workload and infrastructure can become more flexible:

```text
Workload
    ↕
Infrastructure
```

Instead of infrastructure being permanently fixed, it can respond more easily to changing demand.

---

## What if the hardware fails?

There is another problem that has nothing to do with traffic.

**Hardware fails.**

A disk can die.

A network card can fail.

A power supply can fail.

A server can stop responding.

And if your entire application depends on one physical machine, that machine becoming unavailable can become an outage.

Imagine:

```text
User
  ↓
Server
  ↓
Application
```

Now the server fails.

The application has nowhere to run.

This is why production systems often use **redundancy**.

Instead of depending on one machine:

```text
Instance A ──┐
             ├── Application
Instance B ──┘
```

If Instance A fails, Instance B may still be able to serve the workload.

Cloud computing did not invent redundancy. Engineers have been building redundant systems for a long time.

What cloud infrastructure changes is how easily many of these infrastructure patterns can be provisioned, automated, and combined.

You can create multiple instances, place workloads in different locations, replace failed resources, and automate parts of this process through software.

That makes designing around failure much more practical.

---

## Infrastructure is expensive to operate

There is another part of the problem that becomes obvious once you think about everything a server actually needs.

Owning infrastructure means more than buying computers.

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

And these are not one-time concerns.

Servers need to keep running.

Equipment can fail.

Networks need to be maintained.

Hardware eventually becomes outdated.

Someone has to monitor the systems and respond when something goes wrong.

At small scale, this may be manageable.

At large scale, it becomes a major operational problem.

This is one reason cloud providers can exist as a business in the first place.

They specialize in operating infrastructure at very large scale and then expose that infrastructure as a service to other organizations.

Instead of every company building the same physical infrastructure independently, many companies can consume infrastructure from providers that specialize in running it.

---

## Global applications create another problem

There is also a geographic problem.

Suppose your users are in:

```text
India
Germany
Brazil
United States
Japan
```

Now suppose your entire application runs in one physical location.

Some users are going to be physically far away from that infrastructure.

And physical distance matters because network communication takes time.

The farther a request has to travel, the more network latency can become a factor.

This is one reason cloud providers operate infrastructure across multiple geographic locations.

You can place workloads in regions that are closer to the users or services that need to communicate with them.

The deeper idea is simple:

> **Physical infrastructure has a location.**

Cloud platforms give you a programmable way to work with infrastructure distributed across different locations.

---

## The cloud changes who owns the problem

This is probably the cleanest way to think about why the cloud exists.

Without cloud computing, the relationship might look like:

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

Notice what happened.

The infrastructure problem did not disappear.

The ownership boundary changed.

The provider takes responsibility for many lower layers of the infrastructure, while you remain responsible for your application and the parts of the system that you control.

This is a very important cloud concept.

Later, when we talk about managed services and cloud security, you will see this same idea again and again.

---

## Why not just have everyone build their own data centers?

Large companies sometimes do.

Companies operating at enormous scale can have strong reasons to build and operate substantial physical infrastructure themselves.

But most companies do not have the resources or the business reason to build a global infrastructure platform.

Imagine a startup trying to build:

```text
Data centers
Power systems
Cooling
Networking
Storage
Physical security
Global connectivity
```

just so it can run its application.

That would be a massive distraction from actually building the product.

Cloud providers essentially turn infrastructure into something that other organizations can consume.

Instead of every company recreating the same physical systems, many organizations can use infrastructure operated by specialized providers.

That is one of the fundamental ideas behind cloud computing.

---

## The cloud also speeds up experimentation

This is one of the more practical reasons cloud infrastructure became so useful.

Suppose you have an idea for a new application.

At the beginning, you may not know:

```text
How much CPU it needs
How much memory it needs
How much storage it needs
How much traffic it will receive
```

Buying physical infrastructure before you know those things makes experimentation expensive and slow.

With cloud infrastructure, you can often start with a relatively small environment, test the application, measure what it actually needs, and then change the resources later.

That makes infrastructure much more useful during experimentation.

You are not forced to make a perfect infrastructure decision on day one.

You can learn from the workload and adjust.

That is a very different operating model from:

> "Buy the hardware first and hope our estimate was right."

---

## Cloud does not automatically mean cheaper

This is important.

You will sometimes hear:

> "Cloud is cheaper."

That is not always true.

Cloud can reduce upfront costs and make infrastructure much more flexible, but large workloads can also become expensive.

A poorly designed cloud architecture can waste money.

You can have:

```text
Unused compute
Excessive storage
Unnecessary network traffic
Overprovisioned databases
Resources that were never turned off
```

So cloud does not remove the need to think about cost.

You still need to understand:

```text
Capacity
Usage
Pricing
Architecture
Scaling
```

The deeper value of cloud computing is not simply:

> "Cheap servers."

It is the combination of **flexibility, abstraction, and programmable infrastructure**.

---

## Mental Model

Imagine renting an apartment instead of constructing an entire building.

If you construct the building yourself, you are responsible for a huge number of things:

```text
Land
Construction
Electricity
Plumbing
Maintenance
Security
```

If you rent an apartment, the building already exists.

You pay to use part of it.

Someone else operates much of the underlying infrastructure.

That analogy is obviously not perfect, but it captures the important idea:

> **You can consume infrastructure without owning the entire infrastructure yourself.**

Cloud computing applies a similar idea to computing infrastructure.

The provider operates the underlying systems.

You consume the resources and services your application needs.

---

## Feynman Check

Close the lesson and explain these in your own words. Do not try to repeat the definitions exactly. The goal is to see whether you understand **why** cloud computing became useful.

### 1. Why is buying physical infrastructure difficult?

Think about what you have to decide before you actually know your workload.

### 2. What is underutilization?

Explain what happens when you buy more capacity than your application normally needs.

### 3. Why is scaling difficult with physical servers?

Explain what has to happen when you suddenly need more machines.

### 4. Why does hardware failure matter?

What happens if your entire application depends on one physical machine?

### 5. Why does geographic location matter?

Explain what physical distance has to do with network latency.

### 6. What changed when cloud computing appeared?

Try to explain the change in terms of ownership, infrastructure, and responsibility.

### 7. Does cloud automatically mean cheaper?

Explain why flexibility and cost are different questions.

If you can explain those ideas without looking back at the lesson, you understand the reason cloud computing exists rather than simply memorizing a list of advantages.

---

## Practice

### Question 1

A website normally needs one server but occasionally needs ten during traffic spikes. Why might cloud infrastructure be useful?

**Answer:** Because resources can be provisioned more dynamically instead of permanently owning enough physical hardware for the largest possible workload.

### Question 2

A company buys 20 physical servers but usually uses only 10% of their capacity. What problem does it have?

**Answer:** Underutilization. The company has paid for more capacity than the workload normally needs.

### Question 3

A website suddenly becomes popular and its traffic increases by 100x. Why can physical infrastructure become a problem?

**Answer:** Increasing physical capacity may require buying, shipping, installing, configuring, and networking additional hardware, which takes time.

### Question 4

An application runs on one physical server and that server fails. What can happen?

**Answer:** The application can become unavailable because there is no other instance available to serve the workload.

### Question 5

Why can cloud infrastructure help global applications?

**Answer:** Cloud providers operate infrastructure in multiple geographic locations, giving applications more options for placing workloads closer to users.

### Question 6

A company says it moved to the cloud, so now it does not need to think about infrastructure anymore. Is that correct?

**Answer:** No. The cloud changes who operates many infrastructure layers and how resources are consumed, but the company still has responsibilities for the parts of the system it controls.

---

## The Takeaway

Cloud computing became important because traditional infrastructure creates difficult problems around **capacity, utilization, scaling, failure, operations, geography, and upfront investment**.

The cloud does not make those problems disappear.

Instead, it changes the way organizations deal with them.

You can consume infrastructure instead of buying all of it yourself.

You can provision resources more dynamically.

You can use infrastructure in different geographic locations.

You can use managed services instead of building everything from scratch.

And you can treat infrastructure as something that software can request and control.

That gives us a useful progression:

```text
Physical infrastructure
        ↓
Cloud infrastructure
        ↓
Programmable resources
        ↓
Flexible application architecture
```

But we still have an important question left:

> **How can one powerful physical server provide resources to many different customers at the same time?**

That takes us to the next concept: **physical servers vs virtual machines**.
