# 01.6 — Virtualization

We now know why virtual machines are useful.

But we have not yet answered the important technical question:

**How does one physical machine become multiple virtual machines?**

The answer is **virtualization**.

Virtualization is the technique of creating a software-defined version of a computing resource and managing access to the underlying physical hardware.

For our current discussion, we are mainly interested in **server virtualization**.

---

## The basic idea

Imagine a physical server with:

```text
16 CPU cores
64 GB RAM
2 TB storage
```

Normally, one operating system could use that hardware directly.

Virtualization inserts another layer between the hardware and the virtual machines.

Conceptually:

```text
Applications
     ↓
Virtual Machines
     ↓
Virtualization Layer
     ↓
Physical Hardware
```

That virtualization layer manages how the VMs interact with the hardware.

---

## The hypervisor

A common component responsible for this is called a **hypervisor**.

You can think of a hypervisor as the software layer that creates and manages virtual machines.

Conceptually:

```text
        VM A      VM B      VM C
          \         |         /
           \        |        /
             Hypervisor
                  |
           Physical Server
```

The exact architecture depends on the technology, but the important role is:

> The hypervisor controls access to the physical resources used by virtual machines.

---

## CPU virtualization

Suppose the physical server has:

```text
16 CPU cores
```

A VM might be configured with:

```text
4 virtual CPUs
```

Another might have:

```text
2 virtual CPUs
```

The virtualization system schedules work onto the actual physical CPU resources.

So:

```text
VM A → vCPU → Physical CPU
VM B → vCPU → Physical CPU
VM C → vCPU → Physical CPU
```

The exact scheduling is more complicated than this diagram, but the mental model is enough for now.

---

## Memory virtualization

The same idea applies to memory.

Suppose the physical machine has:

```text
64 GB RAM
```

You can allocate virtual memory to different VMs.

For example:

```text
VM A → 16 GB
VM B → 16 GB
VM C → 8 GB
```

The virtualization system manages the mapping between the VM's view of memory and the physical machine's memory.

Again, the virtual memory is backed by real memory.

---

## Storage virtualization

The VM also needs storage.

From inside the VM, you might see something like:

```text
/dev/sda
```

and think:

> "I have a disk."

But the underlying physical storage may actually be part of a much larger storage system.

The cloud or virtualization platform can present that storage to the VM as a virtual disk.

The application does not necessarily need to know exactly which physical disk is holding its data.

That is another example of abstraction.

---

## Network virtualization

The VM also needs a network interface.

From inside the VM, it can appear to have:

```text
eth0
```

with its own IP configuration.

But underneath, the networking may be implemented through virtual switches, physical network cards, routers, and other infrastructure.

Again:

```text
VM
 ↓
Virtual Network Interface
 ↓
Virtual Network
 ↓
Physical Network
```

---

## What virtualization really gives us

Virtualization lets us create software-defined environments that behave like independent computers while sharing physical infrastructure.

This gives cloud providers several powerful capabilities.

They can:

- provision VMs quickly
- allocate resources dynamically
- isolate workloads
- move workloads between hosts
- use physical infrastructure efficiently
- automate infrastructure management

This is a big reason cloud platforms can operate at large scale.

---

## Types of hypervisors

You may eventually hear about two broad categories:

### Type 1

Runs directly on physical hardware.

Conceptually:

```text
Hardware
   ↓
Hypervisor
   ↓
VMs
```

### Type 2

Runs on top of an existing operating system.

Conceptually:

```text
Hardware
   ↓
Host OS
   ↓
Hypervisor
   ↓
VMs
```

For cloud infrastructure, Type 1 hypervisors are especially important.

You do not need to memorize the details yet.

Just remember that the hypervisor is the virtualization layer responsible for managing VMs.

---

## Virtualization is not only about VMs

The concept is broader than virtual machines.

You can virtualize or abstract:

- compute
- storage
- networking
- memory
- entire operating environments

Containers are also related to virtualization and isolation, although they work differently from traditional VMs.

We will study containers much later.

For now:

> Virtualization means creating software-defined views of physical resources.

---

## Why cloud providers care so much about virtualization

Suppose you operate a massive data center.

You want to use your physical machines efficiently.

Without some form of resource abstraction, you might have:

```text
One physical server
        ↓
One customer
```

With virtualization:

```text
One physical server
        ↓
VM A
VM B
VM C
VM D
```

That lets infrastructure become much more flexible.

You can create a VM, stop it, resize it, migrate it, or replace it without treating each action as a physical hardware operation.

That is extremely useful at scale.

---

## Mental Model

Think about a hotel.

The physical building is the hardware.

The rooms are the virtual machines.

A management system controls which room belongs to which guest.

The guests do not need to understand how the building's electrical system works.

Similarly, a VM does not need to understand the exact physical hardware underneath it.

---

## Feynman Check

### 1. What is virtualization?

A technique for creating software-defined views or environments over physical computing resources.

### 2. What is a hypervisor?

A software layer that creates and manages virtual machines and controls their access to physical resources.

### 3. Does a VM have its own physical CPU?

Not usually. Its virtual CPU ultimately uses physical CPU resources provided by the host.

### 4. Why is virtualization useful to cloud providers?

It improves resource utilization, isolation, flexibility, and automation.

---

## Practice

### Question 1

A server has 32 physical CPU cores. Can a VM be configured with virtual CPUs?

**Answer:** Yes.

### Question 2

If a VM has 8 GB of RAM, where does that memory ultimately come from?

**Answer:** Physical memory available to the virtualization system.

### Question 3

Why is virtualization useful when many customers need small amounts of computing resources?

**Answer:** It allows the provider to divide shared physical infrastructure into isolated virtual environments.

---

## The Takeaway

Virtualization is the mechanism that lets physical infrastructure be represented as flexible, software-defined resources.

The next step is to look more closely at the thing we create with that mechanism:

> **What exactly is a virtual machine?**
