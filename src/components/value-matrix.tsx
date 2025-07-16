"use client";

import { useState } from 'react';
import { aiData } from '@/lib/data';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { cn } from '@/lib/utils';

const industries = [...new Set(aiData.caseStudies.map(cs => cs.industry))];

export default function ValueMatrix() {
    const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
    const [selectedValueDriver, setSelectedValueDriver] = useState<string | null>(null);

    const handleIndustrySelect = (industry: string) => {
        setSelectedIndustry(industry);
        setSelectedValueDriver(null);
    };

    const handleValueDriverSelect = (valueDriver: string) => {
        setSelectedValueDriver(valueDriver);
    };

    const valueDrivers = selectedIndustry
        ? [...new Set(aiData.caseStudies.filter(cs => cs.industry === selectedIndustry).map(cs => cs.valueDriver))]
        : [];

    const caseStudies = selectedIndustry && selectedValueDriver
        ? aiData.caseStudies.filter(cs => cs.industry === selectedIndustry && cs.valueDriver === selectedValueDriver)
        : [];

    return (
        <section id="value-matrix" className="py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center font-headline text-foreground">AI Value Matrix</h2>
                <p className="mt-4 text-lg text-center max-w-3xl mx-auto text-muted-foreground">
                    Explore real-world examples of AI's impact. Select an industry, then a value driver to see how companies are leveraging AI.
                </p>

                <div className="mt-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-semibold mb-4 font-headline">1. Select Industry</h3>
                        <div className="flex flex-wrap gap-2">
                            {industries.map(industry => (
                                <Button
                                    key={industry}
                                    variant={selectedIndustry === industry ? "default" : "outline"}
                                    onClick={() => handleIndustrySelect(industry)}
                                >
                                    {industry}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <h3 className="text-xl font-semibold mb-4 font-headline">2. Select Value Driver</h3>
                        <div className={cn("flex flex-wrap gap-2", !selectedIndustry && "opacity-50 cursor-not-allowed")}>
                            {selectedIndustry ? (
                                valueDrivers.length > 0 ? (
                                    valueDrivers.map(vd => (
                                        <Button
                                            key={vd}
                                            variant={selectedValueDriver === vd ? "default" : "outline"}
                                            onClick={() => handleValueDriverSelect(vd)}
                                        >
                                            {vd}
                                        </Button>
                                    ))
                                ) : (
                                    <p className="text-muted-foreground">No value drivers for this industry.</p>
                                )
                            ) : (
                                <p className="text-muted-foreground">Please select an industry first.</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-12 min-h-[200px]">
                    {caseStudies.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in-50 duration-500">
                            {caseStudies.map(cs => (
                                <Card key={cs.company} className="flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
                                    <CardHeader>
                                        <CardTitle className="font-headline">{cs.company}</CardTitle>
                                        <CardDescription className="text-accent font-semibold pt-2">{cs.metric}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground text-sm">{cs.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-muted-foreground py-12">
                            <p>Select an industry and value driver to see case studies.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
