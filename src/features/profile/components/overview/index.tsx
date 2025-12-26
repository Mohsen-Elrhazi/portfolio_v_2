import { GlobeIcon, MapPinIcon , DownloadCloudIcon, FileUser  } from "lucide-react";

import { USER } from "@/features/profile/data/user";
import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";
import { EmailItem } from "./email-item";
import { IntroItem } from "./intro-item";
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CvItem } from "./cv-item";

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
            />
          );
        })}

        <IntroItem icon={MapPinIcon} content={USER.address} />

        <PhoneItem phoneNumber={USER.phoneNumber} />

        <EmailItem email={USER.email} />

        {/* <IntroItem
          icon={GlobeIcon}
          content={urlToName(USER.website)}
          href={USER.website}
        /> */}

        <CvItem
          icon={DownloadCloudIcon}
          // icon={DownloadCloudIcon}
          content="Consulter mon CV"
          href={USER.cv}
        />
        

      </PanelContent>
    </Panel>
  );
}
