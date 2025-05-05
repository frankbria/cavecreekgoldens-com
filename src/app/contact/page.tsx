/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-orange-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
        <p className="text-lg text-gray-700 mb-10">
          Have a question or want to reach out? Fill out the form below and we'll get back to you shortly.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" placeholder="you@example.com" required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="How can we help you?" rows={5} required />
              </div>
              <div>
                <Button type="submit" className="w-full">Send Message</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
