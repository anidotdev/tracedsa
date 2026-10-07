# 01.5 — Physical Servers vs Virtual Machines

So far, we have talked about physical servers and cloud infrastructure as if a machine simply gets assigned to one application.

But there is a problem.

A modern physical server can be extremely powerful.

Imagine a machine with:

```text
64 CPU cores
256 GB RAM
4 TB storage
```

Your small application probably does not need all of that.

Giving the entire physical machine to one workload would often waste a lot of capacity.

This is where **virtual machines** become important.

---

## The physical server

A physical server is a real machine.

It has actual:

- CPU cores
- RAM
- storage
- network interfaces

Its resources are physically present.

If you open the server chassis, you can see the hardware.

Conceptually:

```text
Physical Server

┌──────────────────────────────┐
│ CPU                          │
│ RAM                          │
│ Storage                      │
│ Network interfaces           │
└──────────────────────────────┘
```

Now imagine putting one small application on this entire machine.

Maybe it uses only:

```text
5% CPU
2 GB RAM
```

Most of the machine is sitting unused.

That is not very efficient.

---

## The basic idea of sharing

Instead of giving the entire physical server to one workload, we can divide its resources into multiple isolated environments.

For example:

```text
              Physical Server
        ┌────────────────────────┐
        │                        │
        │    VM A    VM B        │
        │                        │
        │    VM C    VM D        │
        │                        │
        └────────────────────────┘
```

Each VM can behave like its own computer.

The physical machine is still one machine.

But from the perspective of the applications running inside the VMs, it looks like there are multiple machines.

That is one of the central ideas behind virtualization.

---

## Why is this useful?

Suppose the physical server has:

```text
16 CPU cores
64 GB RAM
```

You could divide its capacity across several virtual machines.

For example:

```text
VM A → 4 CPU, 16 GB RAM
VM B → 4 CPU, 16 GB RAM
VM C → 2 CPU, 8 GB RAM
VM D → 2 CPU, 8 GB RAM
```

You now have multiple environments using the same physical hardware.

The provider can allocate resources much more efficiently.

---

## Isolation

Sharing hardware sounds dangerous at first.

You might ask:

> "If several users are using the same physical machine, can one application just access another application's memory?"

That is where isolation becomes important.

Virtualization is designed to provide boundaries between virtual machines.

Conceptually:

```text
VM A
  |
  | isolated
  |
VM B
```

The exact mechanisms are complex, but the goal is simple:

> One VM should not casually access another VM's resources.

This isolation is one of the reasons virtualization is so useful for cloud infrastructure.

---

## Physical server vs virtual machine

The distinction is:

### Physical server

A real machine with physical hardware.

### Virtual machine

A software-defined environment that behaves like a machine and uses resources provided by a physical machine.

Think:

```text
Physical server
       ↓
Virtual machines
       ↓
Applications
```

The VM is not imaginary.

It still uses real CPU cycles, real memory, real storage, and real networking.

The difference is that those resources are being mediated through a virtualization layer.

---

## Why not just run everything directly?

You can.

You could install an operating system directly onto the physical server and run applications there.

But virtualization provides useful benefits:

- better resource utilization
- isolation
- easier provisioning
- easier migration
- flexible allocation
- simpler infrastructure management

These benefits become especially valuable at cloud-provider scale.

---

## One physical machine, many customers

Imagine a cloud provider owns a powerful physical server.

Instead of:

```text
Customer A → entire server
```

the provider can have:

```text
Customer A → VM
Customer B → VM
Customer C → VM
Customer D → VM
```

All of those VMs can share the underlying physical hardware while remaining logically separated.

This is one of the foundations of cloud computing.

---

## But the resources are still finite

Virtualization does not create infinite CPU or RAM.

If the physical machine has:

```text
16 cores
```

you cannot magically create unlimited real CPU capacity.

You can create virtual environments and allocate resources, but those virtual resources ultimately depend on physical resources.

That is an important mindset:

> Virtualization abstracts physical resources. It does not eliminate them.

---

## Overcommitment

Cloud infrastructure can sometimes allocate more virtual capacity than is physically guaranteed at the same instant.

This is a more advanced topic, but the general idea is that providers can manage workloads based on expected usage and scheduling.

You do not need to understand the implementation yet.

Just remember:

> Virtual resources are ultimately backed by physical resources.

---

## Mental Model

Think about an apartment building.

The building is the physical machine.

The apartments are the virtual machines.

Different people occupy different apartments, but they share the same underlying building.

```text
Physical building
 ├── Apartment A
 ├── Apartment B
 ├── Apartment C
 └── Apartment D
```

The analogy is not perfect, but it helps explain resource sharing and isolation.

---

## Feynman Check

### 1. What is a physical server?

A real machine containing actual CPU, memory, storage, and networking hardware.

### 2. What is a virtual machine?

A software-defined machine-like environment that uses resources from a physical machine.

### 3. Why use VMs?

To improve resource utilization, provide isolation, and make infrastructure more flexible.

### 4. Does a VM have real CPU and RAM?

Yes. Its virtual resources ultimately map to physical resources.

### 5. Does virtualization create more physical resources?

No. It manages and abstracts existing physical resources.

---

## Practice

### Question 1

A physical server has 64 GB of RAM. Can four VMs each permanently have 64 GB of physical RAM guaranteed?

**Answer:** Not without additional physical memory or more complex resource management. The underlying physical resources are still finite.

### Question 2

Why might a cloud provider run many VMs on one physical server?

**Answer:** To use the physical hardware more efficiently while keeping workloads isolated.

### Question 3

A VM is deleted. Does the physical server disappear?

**Answer:** No. Only the virtual environment is removed or released.

---

## The Takeaway

A physical server is the actual hardware.

A virtual machine is a software-defined environment that uses that hardware.

This gives us the next question:

> **How can software make one physical computer behave like many computers?**

That is **virtualization**.
