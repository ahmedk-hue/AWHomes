import React from 'react';
import { SEO } from '../components/SEO';
import { Calendar, User, ArrowRight, Search, Tag, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Blog: React.FC = () => {
    const posts = [
        {
            title: "Maximizing Mass Save Rebates: The 2025 Guide",
            excerpt: "Learn how to qualify for up to $16,000 in heat pump rebates through the Mass Save program.",
            author: "Maintenance Team",
            date: "Feb 12, 2025",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=2070&auto=format&fit=crop",
            category: "Energy Efficiency"
        },
        {
            title: "Remodeling Newton: Historic Requirements Explained",
            excerpt: "Navigating the Newton Historic Commission doesn't have to be a nightmare. Here is our expert advice.",
            author: "Design Lead",
            date: "Feb 8, 2025",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1549643276-fbc2cbd0289c?q=80&w=2070&auto=format&fit=crop",
            category: "Newton Projects"
        },
        {
            title: "Heat Pumps vs. Furnaces: Which is Best for MA Winters?",
            excerpt: "A technical breakdown of efficiency, installation costs, and comfort for homeowners in the Greater Boston area.",
            author: "HVAC Specialist",
            date: "Feb 1, 2025",
            readTime: "10 min read",
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
            category: "HVAC Tech"
        }
    ];

    return (
        <div className="pt-20">
            <SEO
                title="Home Improvement Blog | Tips & Advice | A.W. Puma"
                description="Stay informed with the latest tips on home maintenance, energy efficiency, and remodeling trends from the A.W. Puma experts."
                keywords="home improvement blog, hvac tips, remodeling advice, energy efficiency massachusetts"
                canonical="/blog"
            />
            {/* HERO */}
            <section className="bg-brand-navy text-white py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Puma Registry</h1>
                    <p className="text-xl text-gray-300">Expertise on demand. Insights for the informed homeowner.</p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* MAIN FEED */}
                        <div className="lg:w-2/3 space-y-16">
                            {posts.map((post, index) => (
                                <article key={index} className="group cursor-pointer">
                                    <div className="relative h-96 overflow-hidden rounded-sm mb-8">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute top-4 left-4 bg-brand-gold text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 text-sm text-brand-gray mb-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} className="text-brand-gold" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} className="text-brand-gold" />
                                            {post.readTime}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User size={16} className="text-brand-gold" />
                                            By {post.author}
                                        </div>
                                    </div>
                                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors leading-tight">
                                        {post.title}
                                    </h2>
                                    <p className="text-lg text-brand-gray mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-brand-navy font-bold group-hover:translate-x-2 transition-transform">
                                        Read Full Article <ArrowRight size={18} className="text-brand-gold" />
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* SIDEBAR */}
                        <aside className="lg:w-1/3">
                            <div className="bg-brand-light p-8 rounded-sm sticky top-32">
                                <h3 className="text-xl font-serif font-bold text-brand-navy mb-6">Stay Informed</h3>
                                <p className="text-brand-gray mb-8 text-sm leading-relaxed">
                                    Get our monthly dispatch on energy rebates, local construction codes, and home maintenance checklists.
                                </p>
                                <form className="space-y-4">
                                    <input type="email" placeholder="Email address" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-gold outline-none transition-colors" />
                                    <Button className="w-full">Join the Registry</Button>
                                </form>
                                <div className="mt-12 pt-12 border-t border-gray-200">
                                    <h4 className="font-bold text-brand-navy uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                                        <BookOpen size={16} className="text-brand-gold" /> Popular Topics
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Mass Save', 'Heat Pumps', 'Newton Code', 'Mini Splits', 'Interior Design', 'Permitting'].map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-white border border-gray-200 text-xs font-bold text-brand-gray hover:border-brand-gold hover:text-brand-navy cursor-pointer transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
};
