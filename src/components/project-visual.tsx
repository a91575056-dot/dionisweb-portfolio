import Image from "next/image";

import type { Project } from "@/data/site";

type ProjectVisualProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectVisual({
  project,
  priority = false,
}: ProjectVisualProps) {
  return (
    <div className="relative min-h-[21rem] sm:min-h-[25rem]">
      <div
        className="pointer-events-none absolute inset-x-6 top-6 h-40 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${project.accent}40 0%, transparent 72%)`,
        }}
      />

      <div className="absolute right-0 top-0 w-full max-w-[36rem]">
        <div className="rounded-[2rem] border border-white/70 bg-slate-950 p-3 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.8)]">
          <div className="overflow-hidden rounded-[1.5rem] bg-white">
            <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
              <span className="size-2.5 rounded-full bg-rose-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 rounded-full bg-white px-3 py-1 text-[11px] font-medium tracking-[0.24em] text-slate-500 uppercase">
                {project.category}
              </span>
            </div>

            <div className="grid gap-4 p-4 sm:p-5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-slate-200">
                <Image
                  src={project.desktopImage}
                  alt={`${project.title} desktop preview`}
                  fill
                  priority={priority}
                  sizes="(max-width: 768px) 90vw, 46vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 rounded-[1rem] border border-white/15 bg-white/12 p-4 backdrop-blur-md">
                  <p className="text-xs font-semibold tracking-[0.26em] text-white/80 uppercase">
                    {project.audience}
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                    {project.title}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="rounded-[1rem] border border-slate-200 bg-slate-50 px-3 py-3 text-xs font-medium leading-5 text-slate-600 sm:text-sm"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-36 sm:w-44">
        <div className="rounded-[2rem] border border-white/80 bg-white p-2 shadow-[0_24px_55px_-28px_rgba(15,23,42,0.5)]">
          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950">
            <div className="flex h-7 items-center justify-center">
              <span className="h-1.5 w-16 rounded-full bg-white/25" />
            </div>
            <div className="relative aspect-[9/19]">
              <Image
                src={project.mobileImage}
                alt={`${project.title} mobile preview`}
                fill
                sizes="(max-width: 768px) 34vw, 14vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
              <div className="absolute inset-x-3 bottom-3 rounded-[0.9rem] border border-white/20 bg-white/15 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-md">
                Mobile-ready
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
