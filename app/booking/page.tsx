"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Car, MessageCircle } from "lucide-react";
import companyData from "@/data/company.json";
import { useState } from "react";

export default function BookingPage() {
    const [formData, setFormData] = useState({
        service: "Taxi Service",
        startDate: "",
        pickup: "",
        drop: "",
        name: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const generateWhatsAppLink = () => {
        const message = `*New Booking Request*%0A%0A*Service:* ${formData.service}%0A*Date:* ${formData.startDate}%0A*Pickup:* ${formData.pickup}%0A*Drop:* ${formData.drop}%0A*Name:* ${formData.name}%0A%0APlease provide quote & availability.`;
        return `https://wa.me/${companyData.contact.phone}?text=${message}`;
    };

    return (
        <main className="flex-1 py-12 md:py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <SectionHeading title="Book Your Journey" subtitle="Fill in details to get an instant quote on WhatsApp" centered />

                <div className="bg-white p-8 rounded-xl shadow-lg border">
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        {/* Service Form simplified */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Service Type</label>
                                <select name="service" value={formData.service} onChange={handleChange} className="w-full p-3 rounded-md border bg-white">
                                    <option>Taxi Service</option>
                                    <option>Tour Package</option>
                                    <option>Vintage Car Rental</option>
                                    <option>Hotel Booking</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Date</label>
                                <input name="startDate" type="date" value={formData.startDate} onChange={handleChange} className="w-full p-3 rounded-md border" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Pickup Location</label>
                                <input name="pickup" type="text" value={formData.pickup} onChange={handleChange} className="w-full p-3 rounded-md border" placeholder="Enter pickup address" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Drop Location</label>
                                <input name="drop" type="text" value={formData.drop} onChange={handleChange} className="w-full p-3 rounded-md border" placeholder="Enter drop address" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium">Your Name</label>
                                <input name="name" type="text" value={formData.name} onChange={handleChange} className="w-full p-3 rounded-md border" placeholder="John Doe" />
                            </div>
                        </div>

                        <Button
                            size="lg"
                            className="w-full text-lg h-14 bg-green-600 hover:bg-green-700 gap-2"
                            onClick={() => window.open(generateWhatsAppLink(), '_blank')}
                        >
                            <MessageCircle className="h-6 w-6" />
                            Book via WhatsApp
                        </Button>
                        <p className="text-center text-sm text-muted-foreground mt-4">
                            Clicking this will open WhatsApp with your trip details pre-filled.
                        </p>
                    </form>
                </div>
            </div>
        </main>
    );
}
