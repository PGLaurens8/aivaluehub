"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { aiData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ChartContainer, ChartTooltipContent } from './ui/chart';

const impactData = aiData.caseStudies
    .map(cs => {
        const match = cs.metric.match(/([\d\.]+)/);
        if (!match) return null;
        const value = parseFloat(match[1]);
        const isPercentage = cs.metric.includes('%');
        // Simple heuristic to differentiate large numbers from percentages
        const normalizedValue = isPercentage || value > 1000 ? value : value;
        return { name: cs.company, value: normalizedValue, fullMetric: cs.metric };
    })
    .filter((item): item is { name: string; value: number; fullMetric: string } => item !== null)
    .sort((a, b) => (b?.value || 0) - (a?.value || 0))
    .slice(0, 7);

const focusCounts = aiData.caseStudies.reduce((acc, cs) => {
    const focus = cs.valueDriver === 'Personalization' || cs.valueDriver === 'Creative Automation' 
        ? 'Customer Experience' 
        : (cs.valueDriver === 'Operational Efficiency' || cs.valueDriver === 'Supply Chain' 
            ? 'Operations' 
            : 'Innovation');
    acc[focus] = (acc[focus] || 0) + 1;
    return acc;
}, {} as Record<string, number>);

const focusData = Object.keys(focusCounts).map(key => ({ name: key, value: focusCounts[key] }));

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))'];

export default function ImpactCharts() {
    return (
        <section id="by-the-numbers" className="py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center font-headline text-foreground">AI Impact: By The Numbers</h2>
                <p className="mt-4 text-lg text-center max-w-3xl mx-auto text-muted-foreground">
                    Visualizing the quantitative impact of AI reveals powerful trends and provides a clear, data-driven perspective.
                </p>
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <Card className="lg:col-span-3 shadow-lg bg-card">
                        <CardHeader>
                            <CardTitle className="font-headline text-center">Value Creation Metrics</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <ChartContainer config={{}} className="h-[400px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={impactData} layout="vertical" margin={{ left: 20 }}>
                                        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                        <XAxis type="number" scale="log" domain={[1, 'auto']} allowDataOverflow={true} />
                                        <YAxis type="category" dataKey="name" width={100} tick={{ fontSize: 12 }} />
                                        <Tooltip
                                            cursor={{ fill: 'hsl(var(--muted))' }}
                                            content={({ active, payload }) => {
                                                if (active && payload && payload.length) {
                                                    return (
                                                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                                                            <p className="font-bold">{`${payload[0].payload.name}`}</p>
                                                            <p className="text-sm text-muted-foreground">{`Metric: ${payload[0].payload.fullMetric}`}</p>
                                                        </div>
                                                    )
                                                }
                                                return null;
                                            }}
                                        />
                                        <Bar dataKey="value" fill="hsl(var(--primary))" background={{ fill: 'hsl(var(--muted))' }} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                    <Card className="lg:col-span-2 shadow-lg bg-card">
                         <CardHeader>
                            <CardTitle className="font-headline text-center">Focus of AI Applications</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={{}} className="h-[400px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Tooltip
                                            content={<ChartTooltipContent hideLabel />}
                                        />
                                        <Pie data={focusData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} label>
                                            {focusData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
