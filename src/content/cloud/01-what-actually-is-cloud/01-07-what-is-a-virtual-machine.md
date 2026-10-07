# 01.7 — What Is a Virtual Machine?

We have talked about virtualization and the hypervisor.

Now let's make the idea concrete.

A **virtual machine**, or **VM**, is a software-defined computer environment that behaves much like a physical computer.

It can have its own:

- virtual CPU
- virtual memory
- virtual disk
- virtual network interface
- operating system

From inside the VM, it can feel like you are using a normal computer.

---

## Why does it look like a computer?

Suppose you create a Linux VM.

Inside that VM, you might see:

```text
CPU
RAM
Disk
Network interface
Linux
Processes
Files
Users
```

You can install software.

You can create files.

You can run programs.

You can start services.

You can even run a server inside the VM.

That is why people often describe a VM as:

> A computer implemented in software.

The important detail is that the VM is still backed by real physical hardware somewhere underneath.

---

## A VM has its own operating system

This is one of the major differences between a traditional process and a VM.

Suppose you have a physical server running a hypervisor.

You might create:

```text
VM A → Ubuntu
VM B → Debian
VM C → Windows
```

Each VM can have its own operating system.

```text
VM A
 └── Ubuntu

VM B
 └── Debian

VM C
 └── Windows
```

All three operating systems are using the same underlying physical server.

That is one of the main powers of virtualization.

---

## What does a VM actually contain?

A simplified VM can be thought of as having:

```text
Virtual CPU
Virtual RAM
Virtual Disk
Virtual Network Interface
Operating System
Applications
```

This makes the VM look like an independent machine.

For example:

```text
                 Physical Server
        ┌───────────────────────────────┐
        │           Hypervisor           │
        │                               │
        │   VM A            VM B        │
        │   CPU             CPU         │
        │   RAM             RAM         │
        │   Disk            Disk        │
        │   Linux           Linux       │
        └───────────────────────────────┘
```

---

## VM images

Creating a VM manually from scratch every time would be slow.

Cloud systems therefore commonly use **images**.

An image is a prepared template from which a VM can be created.

It might contain:

```text
Operating system
System packages
Configuration
Startup files
```

You can think of an image as:

> A template for creating a machine.

For example, you might select an Ubuntu image and create a new VM from it.

The VM then boots into that operating system.

---

## Starting and stopping a VM

A VM can usually be created, started, stopped, restarted, and deleted through software interfaces.

That is another major difference from physical hardware.

With a physical machine, replacing the machine itself is a physical event.

With a VM, many lifecycle operations become software operations.

Conceptually:

```text
Create
  ↓
Start
  ↓
Run
  ↓
Stop
  ↓
Start again
  ↓
Delete
```

Cloud platforms expose these actions through APIs, dashboards, and command-line tools.

---

## A VM can run a server

This is where the earlier topics connect.

Suppose you create a VM.

Inside it, you install your application.

Your structure might become:

```text
Physical Server
    ↓
Hypervisor
    ↓
Virtual Machine
    ↓
Linux
    ↓
Your Application
    ↓
Server Process
```

The application inside the VM can now act as a server.

This is why phrases like:

> "Deploy your server on a VM"

make sense.

---

## VM resources are configurable

When creating a VM, you commonly choose things such as:

```text
2 vCPU
4 GB RAM
50 GB storage
```

You are defining the virtual hardware exposed to the operating system.

The underlying physical resources still come from somewhere.

The virtualization layer manages the relationship between the VM's virtual hardware and the physical hardware.

---

## Isolation between VMs

Each VM is intended to operate as an isolated environment.

Suppose:

```text
VM A → Your application
VM B → Another customer's application
```

The two VMs can share the same physical host while remaining logically isolated.

This is one reason virtualization is so important in multi-tenant environments.

---

## What a VM does not mean

A VM is not:

> "A fake computer that doesn't use real hardware."

It uses real hardware.

The virtualization layer creates the illusion of independent machines while managing access to shared physical resources.

That distinction is important.

---

## Mental Model

Think of a VM like a computer inside a computer.

The outer computer is physical.

The inner computer is virtual.

```text
Physical machine
┌──────────────────────────────┐
│                              │
│       Virtual Machine        │
│                              │
│   CPU   RAM   Disk   OS      │
│                              │
└──────────────────────────────┘
```

That is not literally how all implementations work internally, but it is a useful beginner mental model.

---

## Feynman Check

### 1. What is a VM?

A software-defined computer environment that uses resources from physical infrastructure.

### 2. Can a VM have its own operating system?

Yes.

### 3. Does a VM use real CPU and RAM?

Yes. Its virtual resources are backed by physical resources.

### 4. Can a VM run a server?

Yes. You can run web servers, application servers, databases, and other services inside a VM.

---

## Practice

### Question 1

Can two VMs on the same physical server run different operating systems?

**Answer:** Yes.

### Question 2

Why are VM images useful?

**Answer:** They provide reusable templates for creating VMs quickly.

### Question 3

A VM is deleted. Does that necessarily mean the physical machine was destroyed?

**Answer:** No. Only the virtual environment was removed.

---

## The Takeaway

A virtual machine is a software-defined computer backed by physical infrastructure.

The VM gives you a familiar environment:

```text
CPU
RAM
Disk
Network
Operating System
Applications
```

without requiring you to own a dedicated physical machine.

This brings us to a term you will hear constantly in cloud discussions:

> **VPS — Virtual Private Server**
