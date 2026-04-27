import {getTranslations} from 'next-intl/server';
import {jobs} from '@/data/site';
import {Input, Section, SectionHeader, Textarea} from '@/components/shared/ui';

export default async function JobsPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'jobsPage'});
  const dataT = await getTranslations({locale: params.locale, namespace: 'data'});

  const localizedJobs = [
    {
      ...jobs[0],
      title: dataT('job1Title'),
      type: t('fullTime'),
      description: dataT('job1Description')
    },
    {
      ...jobs[1],
      title: dataT('job2Title'),
      type: t('partTime'),
      description: dataT('job2Description')
    }
  ];

  return (
    <Section>
      <SectionHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="space-y-4">
          {localizedJobs.map((job) => (
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
          <h2 className="text-2xl font-semibold text-stone-950">{t('apply')}</h2>
          <div className="mt-5 space-y-4">
            <Input placeholder={t('fullName')} />
            <Input placeholder={t('email')} />
            <Input placeholder={t('position')} />
            <Textarea placeholder={t('experience')} />
          </div>
          <button className="mt-5 rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white">{t('submit')}</button>
        </form>
      </div>
    </Section>
  );
}
