<<<<<<< HEAD
import { lazy, Suspense } from 'react';
=======
>>>>>>> 7eb87b5fa18d7868fd6df0fc89da9b430598886b
import { RouterProvider, useRouter } from '@/router/Router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ApplyProvider } from '@/components/ApplyContext';
import { WhatsAppButton } from '@/components/WhatsAppButton';
<<<<<<< HEAD
=======
import { FloatingVideoPlayer } from '@/components/FloatingVideoPlayer'
>>>>>>> 7eb87b5fa18d7868fd6df0fc89da9b430598886b
import { WelcomeSplash } from '@/components/WelcomeSplash'
import { GeminiChatbot } from '@/components/GeminiChatbot'
import { NewsletterStrip } from '@/components/NewsletterStrip'
import { ApplyFab } from '@/components/ApplyFab';
<<<<<<< HEAD
const Home = lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })));
const Study = lazy(() => import('@/pages/Study').then((m) => ({ default: m.Study })));
const Admissions = lazy(() => import('@/pages/Admissions').then((m) => ({ default: m.Admissions })));
const Research = lazy(() => import('@/pages/Research').then((m) => ({ default: m.Research })));
const StudentLife = lazy(() => import('@/pages/StudentLife').then((m) => ({ default: m.StudentLife })));
const Staff = lazy(() => import('@/pages/Staff').then((m) => ({ default: m.Staff })));
const Library = lazy(() => import('@/pages/Library').then((m) => ({ default: m.Library })));
const Fees = lazy(() => import('@/pages/Fees').then((m) => ({ default: m.Fees })));
const About = lazy(() => import('@/pages/About').then((m) => ({ default: m.About })));
const News = lazy(() => import('@/pages/News').then((m) => ({ default: m.News })));
const Events = lazy(() => import('@/pages/Events').then((m) => ({ default: m.Events })));
const Contact = lazy(() => import('@/pages/Contact').then((m) => ({ default: m.Contact })));

const UndergraduateStudy = lazy(() => import('@/pages/study/UndergraduateStudy').then((m) => ({ default: m.UndergraduateStudy })));
const PostgraduateStudy = lazy(() => import('@/pages/study/PostgraduateStudy').then((m) => ({ default: m.PostgraduateStudy })));
const OnlineLearning = lazy(() => import('@/pages/study/OnlineLearning').then((m) => ({ default: m.OnlineLearning })));
const InternationalStudy = lazy(() => import('@/pages/study/InternationalStudy').then((m) => ({ default: m.InternationalStudy })));
const CourseFinder = lazy(() => import('@/pages/study/CourseFinder').then((m) => ({ default: m.CourseFinder })));

const HowToApply = lazy(() => import('@/pages/admissions/HowToApply').then((m) => ({ default: m.HowToApply })));
const EntryRequirements = lazy(() => import('@/pages/admissions/EntryRequirements').then((m) => ({ default: m.EntryRequirements })));
const InternationalAdmissions = lazy(() => import('@/pages/admissions/InternationalAdmissions').then((m) => ({ default: m.InternationalAdmissions })));
const CreditTransfer = lazy(() => import('@/pages/admissions/CreditTransfer').then((m) => ({ default: m.CreditTransfer })));
const Scholarships = lazy(() => import('@/pages/admissions/Scholarships').then((m) => ({ default: m.Scholarships })));
const CampusVisits = lazy(() => import('@/pages/admissions/CampusVisits').then((m) => ({ default: m.CampusVisits })));

const ResearchCentres = lazy(() => import('@/pages/research/ResearchCentres').then((m) => ({ default: m.ResearchCentres })));
const PhdOpportunities = lazy(() => import('@/pages/research/PhdOpportunities').then((m) => ({ default: m.PhdOpportunities })));
const Publications = lazy(() => import('@/pages/research/Publications').then((m) => ({ default: m.Publications })));

const Accommodation = lazy(() => import('@/pages/studentlife/Accommodation').then((m) => ({ default: m.Accommodation })));
const HealthWellbeing = lazy(() => import('@/pages/studentlife/HealthWellbeing').then((m) => ({ default: m.HealthWellbeing })));
const SportsRecreation = lazy(() => import('@/pages/studentlife/SportsRecreation').then((m) => ({ default: m.SportsRecreation })));
const CareerServices = lazy(() => import('@/pages/studentlife/CareerServices').then((m) => ({ default: m.CareerServices })));

const Leadership = lazy(() => import('@/pages/about/Leadership').then((m) => ({ default: m.Leadership })));
const Campus = lazy(() => import('@/pages/about/Campus').then((m) => ({ default: m.Campus })));
const Alumni = lazy(() => import('@/pages/about/Alumni').then((m) => ({ default: m.Alumni })));
const Careers = lazy(() => import('@/pages/about/Careers').then((m) => ({ default: m.Careers })));
const OrgChart = lazy(() => import('@/pages/about/OrgChart').then((m) => ({ default: m.OrgChart })));

const Directory = lazy(() => import('@/pages/contact/Directory').then((m) => ({ default: m.Directory })));
const CampusSafety = lazy(() => import('@/pages/contact/CampusSafety').then((m) => ({ default: m.CampusSafety })));
const Gallery = lazy(() => import('@/pages/Gallery').then((m) => ({ default: m.Gallery })));
const AcademicCalendar = lazy(() => import('@/pages/AcademicCalendar').then((m) => ({ default: m.AcademicCalendar })));
const Privacy = lazy(() => import('@/pages/Privacy').then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import('@/pages/Terms').then((m) => ({ default: m.Terms })));
const Policies = lazy(() => import('@/pages/about/Policies').then((m) => ({ default: m.Policies })));
const AnnualReports = lazy(() => import('@/pages/about/AnnualReports').then((m) => ({ default: m.AnnualReports })));
const JoiningInstructions = lazy(() => import('@/pages/admissions/JoiningInstructions').then((m) => ({ default: m.JoiningInstructions })));
const StudentGuild = lazy(() => import('@/pages/studentlife/StudentGuild').then((m) => ({ default: m.StudentGuild })));
const InnovationHub = lazy(() => import('@/pages/studentlife/InnovationHub').then((m) => ({ default: m.InnovationHub })));
const Conferences = lazy(() => import('@/pages/research/Conferences').then((m) => ({ default: m.Conferences })));
const Journals = lazy(() => import('@/pages/research/Journals').then((m) => ({ default: m.Journals })));
const Offices = lazy(() => import('@/pages/offices/Offices').then((m) => ({ default: m.Offices })));
const CommunityEngagement = lazy(() => import('@/pages/studentlife/CommunityEngagement').then((m) => ({ default: m.CommunityEngagement })));
const Timetables = lazy(() => import('@/pages/studentlife/Timetables').then((m) => ({ default: m.Timetables })));
const GraduationLists = lazy(() => import('@/pages/studentlife/GraduationLists').then((m) => ({ default: m.GraduationLists })));


const Downloads = lazy(() => import('@/pages/Downloads').then((m) => ({ default: m.Downloads })));


const StrategicPlan = lazy(() => import('@/pages/strategic/StrategicPlan').then((m) => ({ default: m.StrategicPlan })));
const Museums = lazy(() => import('@/pages/Museums').then((m) => ({ default: m.Museums })));
const OpenDays = lazy(() => import('@/pages/OpenDays').then((m) => ({ default: m.OpenDays })));
const Glossary = lazy(() => import('@/pages/Glossary').then((m) => ({ default: m.Glossary })));
const EqualityPolicy = lazy(() => import('@/pages/policies/EqualityPolicy').then((m) => ({ default: m.EqualityPolicy })));
const FreedomOfSpeech = lazy(() => import('@/pages/policies/FreedomOfSpeech').then((m) => ({ default: m.FreedomOfSpeech })));
const ModernSlavery = lazy(() => import('@/pages/policies/ModernSlavery').then((m) => ({ default: m.ModernSlavery })));
const Gdpr = lazy(() => import('@/pages/policies/Gdpr').then((m) => ({ default: m.Gdpr })));
const ProspectiveUndergraduates = lazy(() => import('@/pages/prospective/Undergraduates').then((m) => ({ default: m.ProspectiveUndergraduates })));
const ProspectiveGraduates = lazy(() => import('@/pages/prospective/Graduates').then((m) => ({ default: m.ProspectiveGraduates })));
const LifelongLearning = lazy(() => import('@/pages/prospective/LifelongLearning').then((m) => ({ default: m.LifelongLearning })));
const ProspectiveOnline = lazy(() => import('@/pages/prospective/OnlineLearning').then((m) => ({ default: m.ProspectiveOnline })));
const CurrentStudents = lazy(() => import('@/pages/current/Students').then((m) => ({ default: m.CurrentStudents })));
const CurrentStaff = lazy(() => import('@/pages/current/StaffPortal').then((m) => ({ default: m.CurrentStaff })));
const Visitors = lazy(() => import('@/pages/Visitors').then((m) => ({ default: m.Visitors })));
const Media = lazy(() => import('@/pages/Media').then((m) => ({ default: m.Media })));
const Teachers = lazy(() => import('@/pages/Teachers').then((m) => ({ default: m.Teachers })));
const Business = lazy(() => import('@/pages/Business').then((m) => ({ default: m.Business })));
const CampusMap = lazy(() => import('@/pages/utilities/Map').then((m) => ({ default: m.CampusMap })));
const AccessGuide = lazy(() => import('@/pages/utilities/AccessGuide').then((m) => ({ default: m.AccessGuide })));
const Giving = lazy(() => import('@/pages/utilities/Giving').then((m) => ({ default: m.Giving })));
const LegalAccessibility = lazy(() => import('@/pages/legal/Accessibility').then((m) => ({ default: m.LegalAccessibility })));
const LegalCookies = lazy(() => import('@/pages/legal/Cookies').then((m) => ({ default: m.LegalCookies })));
=======
import { Home } from '@/pages/Home';
import { Study } from '@/pages/Study';
import { Admissions } from '@/pages/Admissions';
import { Research } from '@/pages/Research';
import { StudentLife } from '@/pages/StudentLife';
import { Staff } from '@/pages/Staff';
import { Library } from '@/pages/Library';
import { Fees } from '@/pages/Fees';
import { About } from '@/pages/About';
import { News } from '@/pages/News';
import { Events } from '@/pages/Events';
import { Contact } from '@/pages/Contact';

import { UndergraduateStudy } from '@/pages/study/UndergraduateStudy';
import { PostgraduateStudy } from '@/pages/study/PostgraduateStudy';
import { OnlineLearning } from '@/pages/study/OnlineLearning';
import { InternationalStudy } from '@/pages/study/InternationalStudy';
import { CourseFinder } from '@/pages/study/CourseFinder';

import { HowToApply } from '@/pages/admissions/HowToApply';
import { EntryRequirements } from '@/pages/admissions/EntryRequirements';
import { InternationalAdmissions } from '@/pages/admissions/InternationalAdmissions';
import { CreditTransfer } from '@/pages/admissions/CreditTransfer';
import { Scholarships } from '@/pages/admissions/Scholarships';
import { CampusVisits } from '@/pages/admissions/CampusVisits';

import { ResearchCentres } from '@/pages/research/ResearchCentres';
import { PhdOpportunities } from '@/pages/research/PhdOpportunities';
import { Publications } from '@/pages/research/Publications';

import { Accommodation } from '@/pages/studentlife/Accommodation';
import { HealthWellbeing } from '@/pages/studentlife/HealthWellbeing';
import { SportsRecreation } from '@/pages/studentlife/SportsRecreation';
import { CareerServices } from '@/pages/studentlife/CareerServices';

import { Leadership } from '@/pages/about/Leadership';
import { Campus } from '@/pages/about/Campus';
import { Alumni } from '@/pages/about/Alumni';
import { Careers } from '@/pages/about/Careers';
import { OrgChart } from '@/pages/about/OrgChart';

import { Directory } from '@/pages/contact/Directory';
import { CampusSafety } from '@/pages/contact/CampusSafety';
import { Gallery } from '@/pages/Gallery';
import { AcademicCalendar } from '@/pages/AcademicCalendar';
import { Privacy } from '@/pages/Privacy';
import { Terms } from '@/pages/Terms';
import { Policies } from '@/pages/about/Policies';
import { AnnualReports } from '@/pages/about/AnnualReports';
import { JoiningInstructions } from '@/pages/admissions/JoiningInstructions';
import { StudentGuild } from '@/pages/studentlife/StudentGuild';
import { InnovationHub } from '@/pages/studentlife/InnovationHub';
import { Conferences } from '@/pages/research/Conferences';
import { Journals } from '@/pages/research/Journals';
import { Offices } from '@/pages/offices/Offices';
import { CommunityEngagement } from '@/pages/studentlife/CommunityEngagement';
import { Timetables } from '@/pages/studentlife/Timetables';
import { GraduationLists } from '@/pages/studentlife/GraduationLists';


import { Downloads } from '@/pages/Downloads';


import { StrategicPlan } from '@/pages/strategic/StrategicPlan';
import { Museums } from '@/pages/Museums';
import { OpenDays } from '@/pages/OpenDays';
import { Glossary } from '@/pages/Glossary';
import { EqualityPolicy } from '@/pages/policies/EqualityPolicy';
import { FreedomOfSpeech } from '@/pages/policies/FreedomOfSpeech';
import { ModernSlavery } from '@/pages/policies/ModernSlavery';
import { Gdpr } from '@/pages/policies/Gdpr';
import { ProspectiveUndergraduates } from '@/pages/prospective/Undergraduates';
import { ProspectiveGraduates } from '@/pages/prospective/Graduates';
import { LifelongLearning } from '@/pages/prospective/LifelongLearning';
import { ProspectiveOnline } from '@/pages/prospective/OnlineLearning';
import { CurrentStudents } from '@/pages/current/Students';
import { CurrentStaff } from '@/pages/current/StaffPortal';
import { Visitors } from '@/pages/Visitors';
import { Media } from '@/pages/Media';
import { Teachers } from '@/pages/Teachers';
import { Business } from '@/pages/Business';
import { CampusMap } from '@/pages/utilities/Map';
import { AccessGuide } from '@/pages/utilities/AccessGuide';
import { Giving } from '@/pages/utilities/Giving';
import { LegalAccessibility } from '@/pages/legal/Accessibility';
import { LegalCookies } from '@/pages/legal/Cookies';
>>>>>>> 7eb87b5fa18d7868fd6df0fc89da9b430598886b
import { CookieConsent } from '@/components/CookieConsent';

function Routes() {
  const { path } = useRouter();

  const renderPage = () => {
    switch (path) {
      case '/programs':
      case '/study':
        return <Study />;
      case '/programs/undergraduate':
      case '/study/undergraduate':
        return <UndergraduateStudy />;
      case '/programs/postgraduate':
      case '/study/postgraduate':
        return <PostgraduateStudy />;
      case '/programs/online':
      case '/study/online':
        return <OnlineLearning />;
      case '/programs/international':
      case '/study/international':
        return <InternationalStudy />;
      case '/programs/course-finder':
      case '/study/course-finder':
        return <CourseFinder />;

      case '/admissions':
        return <Admissions />;
      case '/admissions/how-to-apply':
        return <HowToApply />;
      case '/admissions/entry-requirements':
        return <EntryRequirements />;
      case '/admissions/international':
        return <InternationalAdmissions />;
      case '/admissions/credit-transfer':
        return <CreditTransfer />;
      case '/admissions/scholarships':
        return <Scholarships />;
      case '/admissions/campus-visits':
        return <CampusVisits />;

      case '/research':
        return <Research />;
      case '/research/centres':
        return <ResearchCentres />;
      case '/research/phd-opportunities':
        return <PhdOpportunities />;
      case '/research/publications':
        return <Publications />;

      case '/student-life':
        return <StudentLife />;
      case '/student-life/accommodation':
        return <Accommodation />;
      case '/student-life/health':
        return <HealthWellbeing />;
      case '/student-life/sports':
        return <SportsRecreation />;
      case '/student-life/careers':
        return <CareerServices />;

      case '/staff':
        return <Staff />;
      case '/library':
        return <Library />;
      case '/fees':
        return <Fees />;

      case '/about':
        return <About />;
      case '/about/leadership':
        return <Leadership />;
      case '/about/campus':
        return <Campus />;
      case '/about/alumni':
        return <Alumni />;
      case '/about/careers':
        return <Careers />;
      case '/about/organisation':
        return <OrgChart />;
      case '/about/policies':
        return <Policies />;
      case '/about/annual-reports':
        return <AnnualReports />;
      case '/admissions/joining-instructions':
        return <JoiningInstructions />;
      case '/student-life/guild':
        return <StudentGuild />;
      case '/student-life/innovation-hub':
        return <InnovationHub />;
      case '/student-life/community-engagement':
        return <CommunityEngagement />;
      case '/student-life/timetables':
        return <Timetables />;
      case '/student-life/graduation-lists':
        return <GraduationLists />;

      case '/research/conferences':
        return <Conferences />;
      case '/research/journals':
        return <Journals />;
      case '/offices':
        return <Offices />;


      case '/news':
        return <News />;
      case '/events':
        return <Events />;

      case '/contact':
        return <Contact />;
      case '/contact/directory':
        return <Directory />;
      case '/contact/campus-safety':
        return <CampusSafety />;

      case '/gallery':
        return <Gallery />;
      case '/academic-calendar':
        return <AcademicCalendar />;
      case '/privacy':
        return <Privacy />;
      case '/terms':
        return <Terms />;
      case '/downloads':
        return <Downloads />;

      
      case '/strategic-plan':
        return <StrategicPlan />;
      case '/museums':
        return <Museums />;
      case '/open-days':
        return <OpenDays />;
      case '/glossary':
        return <Glossary />;
      case '/equality-policy':
        return <EqualityPolicy />;
      case '/freedom-of-speech':
        return <FreedomOfSpeech />;
      case '/modern-slavery-statement':
        return <ModernSlavery />;
      case '/gdpr':
        return <Gdpr />;
      case '/prospective/undergraduates':
        return <ProspectiveUndergraduates />;
      case '/prospective/graduates':
        return <ProspectiveGraduates />;
      case '/prospective/lifelong-learning':
        return <LifelongLearning />;
      case '/prospective/online-learning':
        return <ProspectiveOnline />;
      case '/current/students':
        return <CurrentStudents />;
      case '/current/staff':
        return <CurrentStaff />;
      case '/visitors':
        return <Visitors />;
      case '/media':
        return <Media />;
      case '/teachers':
        return <Teachers />;
      case '/business':
        return <Business />;
      case '/map':
        return <CampusMap />;
      case '/access-guide':
        return <AccessGuide />;
      case '/giving':
        return <Giving />;
      case '/legal/privacy':
        return <Privacy />;
      case '/legal/accessibility':
        return <LegalAccessibility />;
      case '/legal/cookies':
        return <LegalCookies />;
      case '/fees-and-funding':
        return <Fees />;
      case '/libraries':
        return <Library />;
      case '/jobs':
        return <Careers />;
      case '/term-dates':
        return <AcademicCalendar />;
      case '/alumni':
        return <Alumni />;

      case '/':
      default:
        return <Home />;
    }
  };

  return (
    <div className="site-shell">
      <WelcomeSplash />
      <Header />
<<<<<<< HEAD
      <main>
        <Suspense fallback={<div className="page-loading" role="status">Loading…</div>}>
          {renderPage()}
        </Suspense>
      </main>
=======
      <main>{renderPage()}</main>
>>>>>>> 7eb87b5fa18d7868fd6df0fc89da9b430598886b
      <NewsletterStrip />
      <Footer />
      <ApplyFab />
      <WhatsAppButton />
<<<<<<< HEAD
=======
      <FloatingVideoPlayer />
>>>>>>> 7eb87b5fa18d7868fd6df0fc89da9b430598886b
      <CookieConsent />
      <GeminiChatbot />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <ApplyProvider>
        <Routes />
      </ApplyProvider>
    </RouterProvider>
  );
}

export default App;
