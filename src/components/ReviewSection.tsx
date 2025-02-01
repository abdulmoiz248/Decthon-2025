import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { MagicCard } from "./ui/magic-card";

const reviews = [
  {
    company: "Tech Innovators",
    title: "CEO",
    body: "Decentral Consultation has transformed our operations. Their technology solutions have boosted our efficiency and reduced costs significantly.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    company: "Creative Studios",
    title: "Founder",
    body: "The impact of their work is immeasurable. We’ve grown our client base by 40% thanks to their strategic approach.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    company: "Green Enterprises",
    title: "COO",
    body: "Exceptional service. Decentral Consultation helped us streamline our processes and enhance collaboration across teams.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    company: "BuildPro",
    title: "CTO",
    body: "Their platform is top-notch. We’ve seen improved project delivery times and an overall smoother workflow.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    company: "Market Leaders",
    title: "Marketing Director",
    body: "Decentral Consultation’s digital solutions gave us the edge we needed to outperform our competitors in the market.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    company: "Global Tech Solutions",
    title: "VP of Sales",
    body: "The transformation they brought to our sales processes is incredible. We're seeing record-breaking numbers.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  company,
  title,
  body,
}: {
  img: string;
  company: string;
  title: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
    
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col text-center">
          <figcaption className="text-sm font-medium dark:text-white">{company}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{title}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm italic text-gray-300">{body}</blockquote>
    </figure>
  );
};

export function ReviewSection() {
  return (
    <>
    <h1 className="flex items-center justify-center text-black font-bold text-[40px] sm:text-[50px] md:text-[70px] lg:text-[100px] py-10">
  What our Clients Say's
</h1>
 
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
       <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <MagicCard key={review.company}>
            <ReviewCard {...review} />
          </MagicCard>
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <MagicCard key={review.company}>
            <ReviewCard {...review} />
          </MagicCard>
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
    </>
  );
}
