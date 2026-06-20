"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Select a service"),
  message: z.string().min(10, "Tell us about your needs"),
});

type FormData = z.infer<typeof schema>;

const services = [
  "Swedish Massage", "Deep Tissue Massage", "Hot Stone Massage",
  "Prenatal Massage", "HydraFacial", "Anti-Aging Facial",
  "Gel Manicure", "Spa Pedicure", "Couples Massage",
  "Spa Party Package", "Not Sure — Help Me Choose",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-lg px-4 text-center">
          <div className="glass-card p-12">
            <FontAwesomeIcon icon={faCheckCircle} className="size-16 text-secondary mb-6" />
            <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-muted-foreground mb-6">We've received your request and will get back to you within 2 hours during business hours.</p>
            <Button onClick={() => setSubmitted(false)} variant="outline">Send Another Request</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 sm:py-24 bg-gradient-to-br from-purple-50 via-white to-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Contact</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Book Your Session</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Ready to unwind? Fill out the form below and we'll match you with the perfect therapist.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Request a Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Name *</label>
                        <Input {...register("name")} placeholder="Your full name" />
                        {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Email *</label>
                        <Input {...register("email")} placeholder="you@email.com" type="email" />
                        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Phone</label>
                        <Input {...register("phone")} placeholder="(555) 000-0000" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Service *</label>
                        <Select onValueChange={(v: string | null) => setValue("service", v || "")}>
                          <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                          <SelectContent>
                            {services.map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.service && <p className="text-xs text-destructive mt-1">{errors.service.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Message *</label>
                      <Textarea {...register("message")} placeholder="Preferred date, time, location, and any special requests..." rows={4} />
                      {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="gap-2">
                      <FontAwesomeIcon icon={faPaperPlane} className="size-3" />
                      {isSubmitting ? "Sending..." : "Send Booking Request"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="glass-card">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="font-semibold text-lg">Contact Info</h3>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faPhone} className="size-4 text-primary mt-1" />
                    <div>
                      <p className="font-medium">(555) 123-4567</p>
                      <p className="text-xs text-muted-foreground">Call or text anytime</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faEnvelope} className="size-4 text-primary mt-1" />
                    <div>
                      <p className="font-medium">hello@glowmobilespa.com</p>
                      <p className="text-xs text-muted-foreground">Response within 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="size-4 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Serving Metro Area</p>
                      <p className="text-xs text-muted-foreground">Within 25-mile radius</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="pt-6 space-y-3">
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faClock} className="size-4 text-primary mt-1" />
                    <div className="text-sm space-y-1">
                      <p>Mon–Fri: 9am – 7pm</p>
                      <p>Saturday: 10am – 5pm</p>
                      <p>Sunday: By Appointment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
