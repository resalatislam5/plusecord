import DiscordMessage from "@/components/Home/DiscordMessage";
import MockDiscordUi from "@/components/Home/MockDiscordUi";
import { AnimatedList } from "@/components/magicui/animated-list";
import Heading from "@/components/shared/Heading";
import Icons from "@/components/shared/Icons";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import ShinyButton from "@/components/shared/ShinyButton";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
export default function Home() {
  const codeSnippet = `await fetch("http://localhost:3000/api/v1/events", {
    method: "POST",
    body: JSON.stringify({
      category: "sale",
      fields: {
        plan: "PRO",
        email: "resalatislam5@email.com",
        amount: 49.00
      }
    }),
    headers: {
      Authorization: "Bearer <YOUR_API_KEY>"
    }
  })`;

  return (
    <>
      <section className="relative py-16 sm:py-32">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <Heading>
              <span>Monitor Your SaaS,</span> <br />{" "}
              <span className="bg-gradient-to-r bg-primary from-brand-700 to-brand-800 text-transparent bg-clip-text">
                Get Alerts Straight to Discord
              </span>
            </Heading>
            <p className="text-base max-w-2xl mx-auto text-pretty">
              PluseCord is the simplest way to track your SaaS performance, with
              real-time alerts for important
              <span className="font-semibold text-gray-700">
                sales, new users, or any other event
              </span>{" "}
              delivered directly to your Discord
            </p>
            <ul className="space-y-2 text-base text-gray-600 text-left flex flex-col ">
              {[
                "Real-time Discord alerts for critical events",
                "Buy once, use forever",
                "Track sales, new user, or any other event",
              ].map((item, i) => (
                <li className="flex items-center gap-1.5" key={i}>
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="w-full max-w-80">
              <ShinyButton
                href="/sign-up"
                className="z-10 h-14 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Start For Free Today
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* discord */}
      <section className="relative bg-brand-25 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700" />
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <MockDiscordUi>
                <AnimatedList>
                  <DiscordMessage
                    avatarSrc="/images/brand_logo_2.avif"
                    avatarAlt="logo"
                    userName="PluseCord"
                    timestamp="Today at 12:35PM"
                    badgeText="SingUp"
                    badgeColor="#43b581"
                    title="🔔 New User singed up"
                    content={{
                      Name: "Resalat Islam",
                      Email: "resalat@gmail.com",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/images/brand_logo_2.avif"
                    avatarAlt="logo"
                    userName="PluseCord"
                    timestamp="Today at 12:35PM"
                    badgeText="Revenue"
                    badgeColor="#faa61a"
                    title="💰 Payment received"
                    content={{
                      amount: "$49.00",
                      email: "zoe.martinez2001@email.com",
                      plan: "PRO",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/images/brand_logo_2.avif"
                    avatarAlt="logo"
                    userName="PluseCord"
                    timestamp="Today at 5:11AM"
                    badgeText="Milestone"
                    badgeColor="#5865f2"
                    title="🚀 Revenue Milestone Achieved"
                    content={{
                      recurringRevenue: "$5.000 USD",
                      growth: "+8.2%",
                    }}
                  />
                </AnimatedList>
              </MockDiscordUi>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base font-semibold text-brand-600">
              Intuitive Monitoring
            </h2>
            <Heading className="text-center">
              Real-Time Updates, Real-Time Advantage
            </Heading>
          </div>
          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {/* first bento grid element */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[5px] lg:rounded-[33px]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Real-time notification
                  </p>
                  <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                    Get notified about critical events the moment they happen,
                    no matter if you&apos;re at home or the go
                  </p>
                </div>

                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <Image
                      src="/images/PluseCord_mobile.png"
                      alt="phone"
                      fill
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[1rem]" />
            </div>
            {/* second bento grid element */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[5px] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Track Any Event
                  </p>
                  <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                    From new user signup to successful payment, PulseCord
                    notifies you for all critical events in your SaaS.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs"
                    src="/bento-any-event.png"
                    alt="any event"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]" />
            </div>
            {/* third bento grid element */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[5px]">
                <div className="p-8 sm:p-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Track Ay Properties
                  </p>
                  <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                    Add any custom data you like to an event, asuch as a user
                    email, an purchase amount or an exceeded quota.
                  </p>
                </div>
                <div className="flex flex-1 items-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs"
                    src="/images/customize.png"
                    alt="any event"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute rounded-lg shadow ring-1 ring-black/5 inset-px" />
            </div>
            {/* fourth bento grid element */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[5px] max-lg:rounded-b-[33px] lg:rounded-r-[33px]">
                <div className="px-8 pb-3 pt-8 sm:x-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Easy Integration
                  </p>
                  <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                    Connect PluseCord with your existing workflows in minutes
                    and call our intuitive logging API from any language
                  </p>
                </div>

                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/240 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm font-medium text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/15 bg-white/5 px-4 py-2 text-white">
                          plusecord.js
                        </div>
                      </div>
                    </div>

                    <div className="overflow-hidden">
                      <div className="max-h-[30rem]">
                        <SyntaxHighlighter
                          language="typescript"
                          style={{
                            ...oneDark,
                            'pre[class*="language-"]': {
                              ...oneDark['pre[class*="language-"]'],
                              background: "transparent",
                              overflow: "hidden",
                            },
                            'code[class*="language-"]': {
                              ...oneDark['code[class*="language-"]'],
                              background: "transparent",
                            },
                          }}
                        >
                          {codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/*  */}
      <section className="relative py-24 sm:py-32 bg-white">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base font-semibold text-brand-600">
              Real-Word Experiences
            </h2>
            <Heading className="text-center">What our customers say</Heading>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            {/* first review */}
            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 lg:p-16 rounded-t-[2rem] lg:rounded-tr-none lg:rounded-lg-[2rem]">
              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 text-brand-600 fill-brand-600"
                  />
                ))}
              </div>
              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
                Using PluseCord for the past two months has completely
                transformed my experience—watching real-time sales roll in is
                both exciting and motivating.
              </p>
              <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
                <Image
                  src="/user-1.png"
                  alt="user"
                  className="rounded-full object-cover"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col items-center sm:items-start">
                  <p className="font-semibold flex items-center">
                    Resalat Islam
                    <Icons.verificationBadge className="size-4 inline-block ml-1.5" />
                  </p>
                  <p className="text-sm text-gray-600">@resalatislam5</p>
                </div>
              </div>
            </div>
            {/* second review */}
            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 lg:p-16 rounded-b-[2rem] lg:rounded-bl-none lg:rounded-r-[2rem]">
              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 text-brand-600 fill-brand-600"
                  />
                ))}
              </div>
              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
                PluseCord&apos;s been paying off for our SaaS. Nice to gave
                simple way to see how we&apos;are doing day-to-day. Definitely
                makes our lives easier.
              </p>
              <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
                <Image
                  src="/images/user-2.jpg"
                  alt="user"
                  className="rounded-full object-contain size-12"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col items-center sm:items-start">
                  <p className="font-semibold flex items-center">
                    Arabi Zaman Astha
                    <Icons.verificationBadge className="size-4 inline-block ml-1.5" />
                  </p>
                  <p className="text-sm text-gray-600">@arabi</p>
                </div>
              </div>
            </div>
          </div>
          <ShinyButton
            href="/sign-up"
            className="relative z-10 h-14 w-full max-w-xs text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            Start For Free Today
          </ShinyButton>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
