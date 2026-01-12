import { SectionHeading } from "@/components/ui/section-heading";
import { CorporateCabCard } from "@/components/ui/corporate-cab-card";
import corporateCabsData from "@/data/corporate-cabs.json";

export function CorporateCabsSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Corporate Cab Services in Uttarakhand"
                    subtitle="Seamless and professional transportation for executives, ensuring punctuality, comfort, and reliability."
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
                    {corporateCabsData.map((cab) => (
                        <CorporateCabCard key={cab.id} cab={cab} />
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Transparent pricing & real-time booking support</h4>
                            <p className="text-sm text-muted-foreground">No hidden charges</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Professionally maintained fleet</h4>
                            <p className="text-sm text-muted-foreground">Regular safety checks</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900">No hidden charges</h4>
                            <p className="text-sm text-muted-foreground">Upfront pricing</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

