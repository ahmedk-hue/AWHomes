import React from 'react';
import { BookOpen, ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const blogPosts = [
    {
        slug: 'mass-save-rebates-guide-2025',
        title: 'The Complete Guide to Mass Save® Rebates in 2025',
        excerpt: 'Massachusetts homeowners can access up to $16,000 in rebates for heat pumps, insulation, and more. Here\'s exactly how to maximize your Mass Save® incentives this year.',
        category: 'Energy Savings',
        readTime: '8 min read',
        date: 'February 18, 2025',
        author: 'Albert Puma',
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
    },
    {
        slug: 'heat-pump-winter-performance-massachusetts',
        title: 'Do Heat Pumps Work in Massachusetts Winters?',
        excerpt: 'The #1 concern we hear from homeowners. The short answer: yes — but only if you install the right type. Here\'s what you need to know about cold-climate heat pumps in New England.',
        category: 'Heat Pumps',
        readTime: '6 min read',
        date: 'February 10, 2025',
        author: 'Albert Puma',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    },
    {
        slug: 'furnace-replacement-signs-massachusetts',
        title: '7 Signs It\'s Time to Replace Your Furnace (Massachusetts Edition)',
        excerpt: 'Your furnace is working overtime to keep up with New England winters. Learn the warning signs that indicate repair is no longer the right call — and what to do next.',
        category: 'Furnace',
        readTime: '5 min read',
        date: 'January 28, 2025',
        author: 'Albert Puma',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
    },
    {
        slug: 'mini-split-vs-central-ac-boston',
        title: 'Mini Split vs. Central AC: Which Is Right for Your Boston Home?',
        excerpt: 'Many Greater Boston homes were built before central air was standard. We break down the pros, cons, and costs of ductless mini splits vs. central AC for Massachusetts homeowners.',
        category: 'Cooling',
        readTime: '7 min read',
        date: 'January 15, 2025',
        author: 'Albert Puma',
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=800&auto=format&fit=crop',
    },
    {
        slug: 'boiler-maintenance-checklist',
        title: 'Annual Boiler Maintenance Checklist for Massachusetts Homeowners',
        excerpt: 'A well-maintained boiler runs efficiently and lasts longer. Here\'s the 12-point annual maintenance checklist our technicians follow — and what you can do between visits.',
        category: 'Boiler',
        readTime: '5 min read',
        date: 'January 5, 2025',
        author: 'Albert Puma',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
    },
    {
        slug: 'tankless-water-heater-pros-cons',
        title: 'Tankless Water Heaters: Worth It for Massachusetts Homes?',
        excerpt: 'Tankless water heaters promise endless hot water and lower bills. But do they live up to the hype in New England? We break down the real numbers.',
        category: 'Water Heater',
        readTime: '6 min read',
        date: 'December 20, 2024',
        author: 'Albert Puma',
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=800&auto=format&fit=crop',
    },
];

const categoryColors: Record<string, string> = {
    'Energy Savings': 'bg-green-100 text-green-800',
    'Heat Pumps': 'bg-blue-100 text-blue-800',
    'Furnace': 'bg-orange-100 text-orange-800',
    'Cooling': 'bg-sky-100 text-sky-800',
    'Boiler': 'bg-red-100 text-red-800',
    'Water Heater': 'bg-teal-100 text-teal-800',
};

export const Blog: React.FC = () => {
    return (
        <div className="bg-white">
            {/* HERO */}
            <section className="pt-32 pb-20 bg-brand-navy text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <span className="inline-block text-sm font-bold text-brand-gold uppercase tracking-widest mb-4">A.W. Puma Home Services</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">HVAC Tips & Energy Savings for Massachusetts Homeowners</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">Expert advice on heating, cooling, Mass Save® rebates, and keeping your home comfortable year-round.</p>
                </div>
            </section>

            {/* BLOG GRID */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Featured Post */}
                    <div className="mb-16">
                        <div className="grid md:grid-cols-2 gap-0 rounded-sm overflow-hidden shadow-lg border border-gray-100">
                            <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                                <img
                                    src={blogPosts[0].image}
                                    alt={blogPosts[0].title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="bg-brand-navy text-white p-10 flex flex-col justify-center">
                                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 self-start ${categoryColors[blogPosts[0].category] || 'bg-brand-gold/20 text-brand-gold'}`}>
                                    {blogPosts[0].category}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-snug">{blogPosts[0].title}</h2>
                                <p className="text-gray-300 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                                    <span className="flex items-center gap-1"><User size={14} /> {blogPosts[0].author}</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> {blogPosts[0].readTime}</span>
                                    <span>{blogPosts[0].date}</span>
                                </div>
                                <Link to={`/blog/${blogPosts[0].slug}`}>
                                    <Button variant="primary" className="self-start flex items-center gap-2">
                                        Read Article <ArrowRight size={16} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Post Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.slice(1).map((post) => (
                            <article key={post.slug} className="group bg-white rounded-sm overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="aspect-[16/9] overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                                        {post.category}
                                    </span>
                                    <h2 className="text-lg font-bold text-brand-navy mb-3 leading-snug group-hover:text-brand-gold transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-brand-gray text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <Link to={`/blog/${post.slug}`} className="flex items-center gap-1 text-sm font-semibold text-brand-gold hover:gap-2 transition-all">
                                        Read More <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-brand-light text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <BookOpen className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                    <h2 className="text-2xl font-serif font-bold text-brand-navy mb-3">Have an HVAC Question?</h2>
                    <p className="text-brand-gray mb-6">Our team is happy to answer questions about Mass Save® rebates, system sizing, or any heating and cooling concern.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16176183366">
                            <Button variant="primary" className="flex items-center gap-2">Call (617) 618-3366</Button>
                        </a>
                        <Link to="/contact">
                            <Button variant="outline" className="flex items-center gap-2">Send a Message <ArrowRight size={16} /></Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
