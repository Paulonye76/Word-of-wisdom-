'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, BookOpen, Headphones } from 'lucide-react';
const links = [{href:'/teachings',label:'Bible Teachings'},{href:'/podcasts',label:'Podcasts'},{href:'/about',label:'About'}];
export default function Header(){ const [open,setOpen]=useState(false); return <header className="site-header"><div className="nav-wrap"><Link className="brand" href="/"><span className="brand-mark"><BookOpen size={22}/></span><span>Word of <b>Wisdom</b><small>Scripture for everyday life</small></span></Link><nav className={open?'nav-links open':'nav-links'}>{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</Link>)}<Link className="nav-listen" href="/podcasts" onClick={()=>setOpen(false)}><Headphones size={16}/> Listen now</Link></nav><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></div></header> }
