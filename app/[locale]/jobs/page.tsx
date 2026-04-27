import {jobs} from '@/data/site';
import {Input, Section, SectionHeader, Textarea} from '@/components/shared/ui';

export default function JobsPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Jobs"
        title="Hiring blocks for a growing neighborhood food brand"
        description="Two mock positions plus a lightweight application form."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.title} className="rounded-[32px] border border-orange-100 bg-white p-6 shadow-sm shadow-orange-950/5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-stone-950">{job.title}</h2>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">{job.type}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-stone-600">{job.description}</p>
            </div>
          ))}
        </div>
        <form className="rounded-[32px] border border-orange-100 bg-[#fff5ea] p-6 shadow-sm shadow-orange-950/5">
          <h2 className="text-2xl font-semibold text-stone-950">Apply now</h2>
          <div className="mt-5 space-y-4">
            <Input placeholder="Full name" />
            <Input placeholder="Email" />
            <Input placeholder="Position of interest" />
            <Textarea placeholder="Tell us about your experience" />
          </div>
          <button className="mt-5 rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white">Submit application</button>
        </form>
      </div>
    </Section>
  );
}
