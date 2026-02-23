import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { MapPin, Phone, ArrowRight, ExternalLink } from 'lucide-react';

export const Locations: React.FC = () => {
    const locations = [
        {
            name: 'Newton, MA',
            description: 'Serving Newton Centre, Waban, Chestnut Hill, and surrounding villages with specialized knowledge of local zoning and historic requirements.',
            image: 'https://images.unsplash.com/photo-1549643276-fbc2cbd0289c?q=80&w=2070&auto=format&fit=crop',
            link: '/locations/newton'
        },
        {
            name: 'Brookline, MA',
            description: 'Coming Soon: Expert home services for Brookline\'s historic estates and intricate urban properties.',
            image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop',
            link: '#'
        },
        {
            name: 'Wellesley, MA',
            description: 'Coming Soon: High-end remodeling and systems for Wellesley\'s premier residences.',
            image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop',
            link: '#'
        }
    ];

    return (
        <div className="pt-20">
            <SEO
                title="Service Areas | Boston, Metro West & 7 Counties | A.W. Puma"
                description="A.W. Puma serves 7 counties across Massachusetts. Find your city and book your premium home service today."
                keywords="hvac service areas MA, home remodeling locations, boston hvac, metro west construction"
                canonical="/locations"
            />
            <section className="bg-brand-navy text-white py-20 text-center">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Areas We Serve</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Delivering premium home services to Boston's most discerning suburbs.
                    </p>
                </div>
            </section>

            <section className="py-20 max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((loc, index) => (
                        <div key={index} className="group bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={loc.image}
                                    alt={loc.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/10 transition-colors" />
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-sm flex items-center gap-2">
                                    <MapPin size={16} className="text-brand-gold" />
                                    <span className="font-bold text-brand-navy">{loc.name}</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">
                                    {loc.name}
                                </h3>
                                <p className="text-brand-gray mb-6 line-clamp-3">
                                    {loc.description}
                                </p>
                                {loc.link !== '#' ? (
                                    <Link to={loc.link} className="inline-flex items-center gap-2 text-brand-gold font-bold hover:gap-3 transition-all uppercase tracking-widest text-sm">
                                        View Location Page <ArrowRight size={16} />
                                    </Link>
                                ) : (
                                    <span className="inline-flex items-center gap-2 text-gray-400 font-bold uppercase tracking-widest text-sm cursor-not-allowed">
                                        Coming Soon
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
