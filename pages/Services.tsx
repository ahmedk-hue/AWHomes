import React from 'react';
import { ServiceGrid } from '../components/ServiceGrid';

export const Services: React.FC = () => {
    return (
        <div className="bg-white pt-24">
            <section className="bg-brand-navy text-white py-20 text-center">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Premium Services</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Comprehensive home improvement solutions delivered with engineering precision and white-glove care.
                    </p>
                </div>
            </section>

            <div className="py-12">
                <ServiceGrid />
            </div>
        </div>
    );
};
