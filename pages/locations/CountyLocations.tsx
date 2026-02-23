import React from 'react';
import { Flame, CheckCircle, Phone, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

interface CountyPageProps {
    county: string;
    cities: string[];
    description: string;
    image: string;
}

const CountyPage: React.FC<CountyPageProps> = ({ county, cities, description, image }) => (
    <div className="bg-white">
        <section className="relative pt-32 pb-20 bg-brand-navy text-white overflow-hidden">
            <div className="absolute inset-0 opacity-15">
                <img src={image} alt={county} className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-brand-navy/80" />
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <span className="inline-block text-sm font-bold text-brand-gold uppercase tracking-widest mb-4">A.W. Puma Home Services</span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                    HVAC Services in<br />
                    <span className="text-brand-gold">{county}</span>
                </h1>
                <p className="text-xl text-gray-200 max-w-2xl mx-auto">{description}</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+16176183366">
                        <Button size="lg" variant="primary" className="flex items-center gap-2">
                            <Phone size={18} /> (617) 618-3366
                        </Button>
                    </a>
                    <Link to="/contact">
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy flex items-center gap-2">
                            Get Free Estimate <ArrowRight size={18} />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>

        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Cities We Serve in {county}</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {cities.map((city) => (
                            <div key={city} className="flex items-center gap-2 p-3 bg-brand-light rounded-sm">
                                <MapPin size={16} className="text-brand-gold shrink-0" />
                                <span className="font-medium text-brand-navy">{city}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Our Services</h2>
                    <div className="space-y-3">
                        {[
                            'Furnace Installation & Repair',
                            'Ductless Mini Split Systems',
                            'Heat Pump Installation',
                            'Air Conditioner Installation & Repair',
                            'Boiler Installation & Repair',
                            'Water Heater Replacement',
                            'Mass Save® Energy Assessments',
                        ].map((service) => (
                            <div key={service} className="flex items-center gap-3">
                                <CheckCircle size={18} className="text-brand-gold shrink-0" />
                                <span className="text-brand-gray">{service}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 p-6 bg-brand-navy text-white rounded-sm">
                        <div className="text-lg font-bold mb-1">A.W. Puma Home Services</div>
                        <div className="text-sm text-gray-300 mb-2">202 Washington St, Brookline, MA 02445</div>
                        <a href="tel:+16176183366" className="text-brand-gold font-bold text-lg hover:underline">(617) 618-3366</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 bg-brand-gold text-white text-center">
            <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold mb-4">Serving {county} Since 2010</h2>
                <p className="text-xl mb-8 opacity-90">Always There. Always Fair. Get a free HVAC estimate for your home today.</p>
                <a href="tel:+16176183366">
                    <Button size="lg" className="bg-white text-brand-gold hover:bg-gray-100 font-bold">Call (617) 618-3366</Button>
                </a>
            </div>
        </section>
    </div>
);

const countyData: Record<string, CountyPageProps> = {
    'middlesex-county': {
        county: 'Middlesex County, MA',
        cities: ['Newton', 'Cambridge', 'Lowell', 'Somerville', 'Medford', 'Waltham', 'Watertown'],
        description: 'A.W. Puma provides expert heating, cooling, and energy services to homeowners across Middlesex County — including Newton, Cambridge, and Lowell.',
        image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070&auto=format&fit=crop',
    },
    'norfolk-county': {
        county: 'Norfolk County, MA',
        cities: ['Dover', 'Wellesley', 'Needham', 'Winchester', 'Brookline', 'Milton', 'Dedham'],
        description: 'Trusted HVAC services for Norfolk County homeowners — from Wellesley and Needham to Dover and Winchester. Mass Save® certified, fully permitted.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
    },
    'suffolk-county': {
        county: 'Suffolk County, MA',
        cities: ['Boston', 'Revere', 'Chelsea', 'Winthrop'],
        description: 'A.W. Puma serves Boston and Suffolk County homeowners with licensed HVAC installation, repair, and Mass Save® energy services.',
        image: 'https://images.unsplash.com/photo-1501979376754-1ff28c3b0e7c?q=80&w=2070&auto=format&fit=crop',
    },
    'essex-county': {
        county: 'Essex County, MA',
        cities: ['Lawrence', 'Lynn', 'Peabody', 'Salem', 'Haverhill', 'Beverly'],
        description: 'Heating, cooling, and energy efficiency services for Essex County homes — from Lawrence to Salem and beyond.',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop',
    },
    'plymouth-county': {
        county: 'Plymouth County, MA',
        cities: ['Brockton', 'Plymouth', 'Weymouth', 'Quincy', 'Marshfield'],
        description: 'A.W. Puma brings professional HVAC and Mass Save® energy services to Plymouth County homeowners — including Brockton, Plymouth, and Quincy.',
        image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=2070&auto=format&fit=crop',
    },
    'worcester-county': {
        county: 'Worcester County, MA',
        cities: ['Worcester', 'Fitchburg', 'Leominster', 'Marlborough', 'Shrewsbury'],
        description: 'Expert HVAC installation and repair for Worcester County homes — from city neighborhoods to suburban properties.',
        image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop',
    },
    'bristol-county': {
        county: 'Bristol County, MA',
        cities: ['New Bedford', 'Fall River', 'Taunton', 'Attleboro', 'Brockton'],
        description: 'A.W. Puma serves Bristol County homeowners with licensed furnace, boiler, heat pump, and Mass Save® energy services.',
        image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=2074&auto=format&fit=crop',
    },
};

export const CountyLocation: React.FC<{ countySlug: string }> = ({ countySlug }) => {
    const data = countyData[countySlug];
    if (!data) {
        return (
            <div className="pt-40 text-center">
                <h1 className="text-2xl font-bold text-brand-navy">Location not found</h1>
                <Link to="/locations" className="text-brand-gold underline mt-4 block">View all locations</Link>
            </div>
        );
    }
    return <CountyPage {...data} />;
};

// Named exports for each county (used in App.tsx routes)
export const MiddlesexCounty = () => <CountyLocation countySlug="middlesex-county" />;
export const NorfolkCounty = () => <CountyLocation countySlug="norfolk-county" />;
export const SuffolkCounty = () => <CountyLocation countySlug="suffolk-county" />;
export const EssexCounty = () => <CountyLocation countySlug="essex-county" />;
export const PlymouthCounty = () => <CountyLocation countySlug="plymouth-county" />;
export const WorcesterCounty = () => <CountyLocation countySlug="worcester-county" />;
export const BristolCounty = () => <CountyLocation countySlug="bristol-county" />;
