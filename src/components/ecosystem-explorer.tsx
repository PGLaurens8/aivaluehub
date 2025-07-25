"use client";

import { useState } from 'react';
import { aiData } from '@/lib/data';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type FilterType = 'all' | 'Tech Giant' | 'Specialized AI Dev' | 'Open-Source Framework' | 'Cloud Platform' | 'Specialized Tool' | 'Major LLM Developer' | 'Specialized AI Tool';

export default function EcosystemExplorer() {
    const [companyFilter, setCompanyFilter] = useState<FilterType>('all');
    const [toolFilter, setToolFilter] = useState<FilterType>('all');
    const [affiliateFilter, setAffiliateFilter] = useState<FilterType>('all');

    const companyFilters: { label: string, value: FilterType }[] = [
        { label: 'All', value: 'all' },
        { label: 'Tech Giants', value: 'Tech Giant' },
        { label: 'Specialized Firms', value: 'Specialized AI Dev' },
    ];

    const toolFilters: { label: string, value: FilterType }[] = [
        { label: 'All', value: 'all' },
        { label: 'Frameworks', value: 'Open-Source Framework' },
        { label: 'Cloud Platforms', value: 'Cloud Platform' },
        { label: 'Specialized Tools', value: 'Specialized Tool' },
    ];
    
    const affiliateFilters: { label: string, value: FilterType }[] = [
        { label: 'All', value: 'all' },
        { label: 'Major LLM Developers', value: 'Major LLM Developer' },
        { label: 'Specialized AI Tools', value: 'Specialized AI Tool' },
    ];

    const filteredCompanies = companyFilter === 'all' ? aiData.companies : aiData.companies.filter(c => c.type === companyFilter);
    const filteredTools = toolFilter === 'all' ? aiData.tools : aiData.tools.filter(t => t.type === toolFilter);
    const filteredAffiliates = affiliateFilter === 'all' ? aiData.affiliates : aiData.affiliates.filter(a => a.type === affiliateFilter);

    return (
        <section id="ecosystem" className="py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center font-headline text-foreground">Explore the AI Ecosystem</h2>
                <p className="mt-4 text-lg text-center max-w-3xl mx-auto text-muted-foreground">
                    Discover the specialized talent, innovative companies, and powerful tools that form the foundation of the AI revolution.
                </p>

                <Tabs defaultValue="tools" className="mt-12 max-w-5xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                        <TabsTrigger value="tools">Tools</TabsTrigger>
                        <TabsTrigger value="companies">Companies</TabsTrigger>
                        <TabsTrigger value="roles">Roles</TabsTrigger>
                        <TabsTrigger value="affiliates">Affiliate Programs</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="roles" className="mt-8">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {aiData.roles.map((role) => (
                                <Dialog key={role.name}>
                                    <DialogTrigger asChild>
                                        <Card className="text-center cursor-pointer hover:border-primary hover:shadow-lg transition-all duration-300 h-full">
                                            <CardHeader>
                                                <CardTitle className="text-base font-headline">{role.name}</CardTitle>
                                                <CardDescription className="text-xs">{role.focus}</CardDescription>
                                            </CardHeader>
                                        </Card>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle className="font-headline text-2xl">{role.name}</DialogTitle>
                                            <p className="text-accent font-semibold pt-1">{role.focus}</p>
                                        </DialogHeader>
                                        <div className="space-y-2 text-sm">
                                            <p><strong className="font-semibold text-foreground">Responsibilities:</strong> {role.responsibilities}</p>
                                            <p><strong className="font-semibold text-foreground">Skills:</strong> {role.skills}</p>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="companies" className="mt-8">
                        <div className="flex justify-center mb-6 gap-2">
                            {companyFilters.map(filter => (
                                <Button key={filter.value} variant={companyFilter === filter.value ? "default" : "outline"} onClick={() => setCompanyFilter(filter.value)}>{filter.label}</Button>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredCompanies.map(company => (
                                 <Dialog key={company.name}>
                                    <DialogTrigger asChild>
                                        <Card className="cursor-pointer hover:border-primary transition-colors h-full">
                                            <CardHeader>
                                                <CardTitle className="font-headline">{company.name}</CardTitle>
                                                <CardDescription>
                                                    <Badge variant={company.type === 'Tech Giant' ? 'default' : 'secondary'}>{company.type}</Badge>
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground"><strong className="text-foreground/80">Focus:</strong> {company.focus}</p>
                                            </CardContent>
                                        </Card>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle className="font-headline text-2xl">{company.name}</DialogTitle>
                                            <Badge variant={company.type === 'Tech Giant' ? 'default' : 'secondary'} className="w-fit">{company.type}</Badge>
                                        </DialogHeader>
                                        <div className="space-y-2 text-sm">
                                            <p><strong className="font-semibold text-foreground">Primary Focus:</strong> {company.focus}</p>
                                            <p><strong className="font-semibold text-foreground">Example:</strong> {company.example}</p>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="tools" className="mt-8">
                        <div className="flex justify-center flex-wrap mb-6 gap-2">
                            {toolFilters.map(filter => (
                                <Button key={filter.value} variant={toolFilter === filter.value ? "default" : "outline"} onClick={() => setToolFilter(filter.value)}>{filter.label}</Button>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredTools.map(tool => (
                                 <Dialog key={tool.name}>
                                    <DialogTrigger asChild>
                                        <Card className="cursor-pointer hover:border-primary transition-colors h-full">
                                            <CardHeader>
                                                <CardTitle className="font-headline">{tool.name}</CardTitle>
                                                <CardDescription>
                                                    <Badge variant="outline">{tool.type}</Badge>
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground"><strong className="text-foreground/80">Primary Use:</strong> {tool.use}</p>
                                            </CardContent>
                                        </Card>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle className="font-headline text-2xl">{tool.name}</DialogTitle>
                                            <Badge variant="outline" className="w-fit">{tool.type}</Badge>
                                        </DialogHeader>
                                         <div className="space-y-2 text-sm">
                                            <p><strong className="font-semibold text-foreground">Primary Use Case:</strong> {tool.use}</p>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>
                    </TabsContent>
                    
                     <TabsContent value="affiliates" className="mt-8">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-semibold font-headline">AI Affiliate Programs</h3>
                            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">Explore AI tools with affiliate programs. Details can change, so please verify on their websites.</p>
                        </div>
                        <div className="flex justify-center flex-wrap mb-6 gap-2">
                             {affiliateFilters.map(filter => (
                                <Button key={filter.value} variant={affiliateFilter === filter.value ? "default" : "outline"} onClick={() => setAffiliateFilter(filter.value)}>{filter.label}</Button>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredAffiliates.map(affiliate => (
                                <Dialog key={affiliate.name}>
                                    <DialogTrigger asChild>
                                        <Card className="cursor-pointer hover:border-primary transition-colors h-full">
                                            <CardHeader>
                                                <CardTitle className="font-headline">{affiliate.name}</CardTitle>
                                                <CardDescription>
                                                    <Badge variant="secondary">{affiliate.type}</Badge>
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground mb-2"><strong className="text-foreground/80">Program:</strong> {affiliate.affiliateProgram}</p>
                                                <p className="text-xs text-muted-foreground"><strong className="text-foreground/80">Potential:</strong> {affiliate.affiliatePotential}</p>
                                            </CardContent>
                                        </Card>
                                    </DialogTrigger>
                                     <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle className="font-headline text-2xl">{affiliate.name}</DialogTitle>
                                            <Badge variant="secondary" className="w-fit">{affiliate.type}</Badge>
                                        </DialogHeader>
                                         <div className="space-y-2 text-sm">
                                            <p><strong className="font-semibold text-foreground">AI Focus:</strong> {affiliate.focus}</p>
                                            <p><strong className="font-semibold text-foreground">Affiliate Program:</strong> {affiliate.affiliateProgram}</p>
                                            <p><strong className="font-semibold text-foreground">Potential:</strong> {affiliate.affiliatePotential}</p>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
