import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { universityInfo } from '@/data/university';
import { useRouter } from '@/router/Router';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useApply } from '@/components/ApplyContext';
import { LiveClock } from '@/components/LiveClock';

const announcements = [
  'AVIU — NCHE-accredited university at Nabweru, Wakiso · January, May & August intakes open',
  'Apply now for the August intake · Admissions: +256 700 670 691 / +256 766 751 763',
  'Bachelor programmes in Education, Business & ICT, Nursing, and Social Sciences',
  '5th Graduation Ceremony — Class of 2026 · 25 September 2026 · see Graduation Lists',
  'Campus Open Days & visits · Book via Admissions · Nabweru campus tours welcome',
  'E-learning portal for enrolled students · elearning.aviu.ac.ug',
  'Nursing Science · simulation labs & clinical pathways · Faculty of Nursing & Health Sciences',
  'Teacher education degrees · Primary, Early Childhood, Arts & Science with Education',
  'Business, Accounting, IT & Computer Science degrees · Faculty of Business Administration & ICT',
  'Social Work, Public Administration & Arts and Social Science · community-focused study',
  'Credit transfer & Recognition of Prior Learning (RPL) · upgrade diploma pathways available',
  'PhD programmes coming soon · register interest with the Research Office',
  'Annual Research Conference & Innovation Fair · student projects on display',
  'Student Guild, clubs, accommodation guidance & community engagement at Nabweru',
  'Downloads: prospectus, handbook, application checklist · see Downloads page',
  'International applicants welcome · English proficiency & certified transcripts required',
  'Mature-age entry (21+) and diploma-to-degree upgrade routes · contact Admissions',
  'Verify AVIU on the National Council for Higher Education · unche.or.ug',
  'Fees schedules coming soon · contact Bursar / Admissions for current guidance',
  'Library, ICT Services, Academic Registrar & Quality Assurance · full campus support',
  'Partnerships & consultancy · industry internships and MoUs via AVIU offices',
  'info@aviu.ac.ug · Nabweru, 1 km off Nansana–Hoima Road, Wakiso District',
];

type NavGroup = {
  label: string;
  items: { label: string; path: string }[];
};

const navGroups: NavGroup[] = [
  {
    label: 'Programs',
    items: [
      { label: 'All Programs', path: '/programs' },
      { label: 'Undergraduate', path: '/programs/undergraduate' },
      { label: 'Postgraduate & Doctoral', path: '/programs/postgraduate' },
      { label: 'Online & Flexible', path: '/programs/online' },
      { label: 'International Study', path: '/programs/international' },
      { label: 'Course Finder', path: '/programs/course-finder' },
      { label: 'Fees (Coming Soon)', path: '/fees' },
    ],
  },
  {
    label: 'Admissions',
    items: [
      { label: 'Admissions Overview', path: '/admissions' },
      { label: 'How to Apply', path: '/admissions/how-to-apply' },
      { label: 'Entry Requirements', path: '/admissions/entry-requirements' },
      { label: 'Joining Instructions', path: '/admissions/joining-instructions' },
      { label: 'International Applicants', path: '/admissions/international' },
      { label: 'Credit Transfer & RPL', path: '/admissions/credit-transfer' },
      { label: 'Scholarships & Financial Aid', path: '/admissions/scholarships' },
      { label: 'Campus Visits & Open Days', path: '/admissions/campus-visits' },
      { label: 'Downloads & Forms', path: '/downloads' },
    ],
  },
  {
    label: 'Research',
    items: [
      { label: 'Research Overview', path: '/research' },
      { label: 'Research Centres', path: '/research/centres' },
      { label: 'PhD Opportunities', path: '/research/phd-opportunities' },
      { label: 'Publications & Repository', path: '/research/publications' },
      { label: 'Conferences', path: '/research/conferences' },
      { label: 'Journals', path: '/research/journals' },
    ],
  },
  {
    label: 'Student Life',
    items: [
      { label: 'Student Life Overview', path: '/student-life' },
      { label: 'Accommodation & Housing', path: '/student-life/accommodation' },
      { label: 'Student Guild', path: '/student-life/guild' },
      { label: 'Innovation Hub', path: '/student-life/innovation-hub' },
      { label: 'Community Engagement', path: '/student-life/community-engagement' },
      { label: 'Timetables', path: '/student-life/timetables' },
      { label: 'Graduation Lists', path: '/student-life/graduation-lists' },
      { label: 'Health & Wellbeing', path: '/student-life/health' },
      { label: 'Sports & Recreation', path: '/student-life/sports' },
      { label: 'Career Services', path: '/student-life/careers' },
      { label: 'Library', path: '/library' },
      { label: 'Events', path: '/events' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'About AVIU', path: '/about' },
      { label: 'Leadership & Governance', path: '/about/leadership' },
      { label: 'University Organisation', path: '/about/organisation' },
      { label: 'Policy & Legal Framework', path: '/about/policies' },
      { label: 'Annual Reports', path: '/about/annual-reports' },
      { label: 'Campus & Visitor Info', path: '/about/campus' },
      { label: 'Alumni & Donors', path: '/about/alumni' },
      { label: 'Careers / Jobs', path: '/about/careers' },
      { label: 'Offices & Directorates', path: '/offices' },
      { label: 'Staff Directory', path: '/staff' },
    ],
  },
  {
    label: 'Contact',
    items: [
      { label: 'Contact Us', path: '/contact' },
      { label: 'Staff & Department Directory', path: '/contact/directory' },
      { label: 'Campus Safety', path: '/contact/campus-safety' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'Academic Calendar', path: '/academic-calendar' },
    ],
  },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState('');
  const { path, navigate } = useRouter();
  const { openApply } = useApply();

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    setCurrentDate(formatted);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const go = useCallback((to: string) => {
    setMenuOpen(false);
    setOpenDropdown(null);
    navigate(to);
  }, [navigate]);

  const isActive = (group: NavGroup) =>
    group.items.some((item) => path === item.path);

  return (
    <>
      <div className="top-meta-bar">
        <LiveClock />
        <button type="button" className="top-meta-apply" onClick={openApply}>Apply now</button>
      </div>
      <div className="marquee-ads" aria-label="Announcements">
        <div className="marquee-track">
          {[...announcements, ...announcements].map((text, i) => (
            <span className="marquee-item" key={`${i}-${text.slice(0, 12)}`}>
              <span className="announcement-dot" />
              {text}
            </span>
          ))}
        </div>
      </div>
      <header
        className="header"
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <a
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            go('/');
          }}
          aria-label={`${universityInfo.name} home`}
        >
          <img src="/images/aviu-logo.png" alt="Avance International University logo" />
          <span>
            <strong>AVANCE</strong>
            <small>INTERNATIONAL UNIVERSITY</small>
          </span>
        </a>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} id="main-nav">
          {navGroups.map((group) => {
            const hasChildren = group.items.length > 1;
            const isOpen = openDropdown === group.label;
            return (
              <div
                className={`nav-group ${isOpen ? 'dropdown-open' : ''}`}
                key={group.label}
                onMouseEnter={() => {
                  if (window.matchMedia('(min-width: 961px)').matches) {
                    setOpenDropdown(group.label);
                  }
                }}
              >
                <a
                  href={`#${group.items[0].path}`}
                  className={isActive(group) ? 'nav-active' : ''}
                  aria-expanded={hasChildren ? isOpen : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    if (hasChildren) {
                      // Mobile & desktop: toggle submenu; second intent can open first item via chevron area
                      setOpenDropdown((prev) => (prev === group.label ? null : group.label));
                    } else {
                      go(group.items[0].path);
                    }
                  }}
                >
                  {group.label}
                  {hasChildren && (
                    <ChevronDown
                      size={13}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : undefined,
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  )}
                </a>
                {hasChildren && isOpen && (
                  <div className="nav-dropdown">
                    {group.items.map((item) => (
                      <a
                        key={item.path}
                        href={`#${item.path}`}
                        className={path === item.path ? 'dropdown-active' : ''}
                        onClick={(e) => {
                          e.preventDefault();
                          go(item.path);
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <button
            type="button"
            className="nav-apply mobile-apply"
            onClick={() => {
              setMenuOpen(false);
              openApply();
            }}
          >
            Apply to AVIU
          </button>
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search size={19} />
          </button>
          <ThemeToggle />
          <a
            className="nav-apply"
            href="https://elearning.aviu.ac.ug/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
          >
            Portal
          </a>
          <button className="nav-apply" onClick={openApply}>
            Apply to AVIU
          </button>
          <button
            type="button"
            className="nav-icon-btn"
            aria-label="Course finder"
            title="Course finder"
            onClick={() => go('/programs/course-finder')}
          >
            Finder
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {searchOpen && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search programmes, research, news..."
            autoFocus
          />
          <button onClick={() => setSearchOpen(false)}>Close</button>
        </div>
      )}
    </>
  );
}
