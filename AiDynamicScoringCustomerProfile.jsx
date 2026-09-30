import React from 'react';

// Image assets
const images = {
  customerProfile: 'https://www.figma.com/api/mcp/asset/441a66e5-c647-4cd4-bee2-32acbfd4a397.png',
  profileAvatar: 'https://www.figma.com/api/mcp/asset/b52e6ef2-c7fc-4068-888c-15e3c6eb2027.png',
  logo: 'https://www.figma.com/api/mcp/asset/fb896b36-f995-44cf-8240-62bab2beb3cc.png',
};

const AiDynamicScoringCustomerProfile = () => {
  const customerData = {
    name: 'Arun Kumar',
    title: 'Chief Technology Officer',
    company: 'ABC Technologies',
    email: 'arun.k@abctech.com',
    location: 'Bengaluru, India (KA)',
    score: 94,
    previousScore: 78,
    scoreIncrease: 16,
    quantile: 'Top 2%',
    aiConfidence: 96,
    leadType: 'HOT LEAD',
    assignedTo: 'Sarah Jenkins',
    companySize: '250-500',
    revenue: '₹85 Cr.',
    stage: 'Series B Stage',
  };

  const scoringFactors = [
    {
      title: 'Purchase Intent',
      points: '+28 pts',
      percentage: 93,
      description: 'Requested official quotation, visited pricing page 4x',
    },
    {
      title: 'Website Engagement',
      points: '+20 pts',
      percentage: 80,
      description: '7 unique pages visited, 14m on site, downloaded whitepaper',
    },
    {
      title: 'Budget Match',
      points: '+18 pts',
      percentage: 90,
      description: 'Budget matches Enterprise plan baseline (₹8.5L - ₹10L range)',
    },
    {
      title: 'Product Interest Depth',
      points: '+15 pts',
      percentage: 75,
      description: 'Custom API webhooks, SSO specs & automation canvas reviewed',
    },
    {
      title: 'Conversation Engagement',
      points: '+8 pts',
      percentage: 60,
      description: 'Active chatbot exchange, mean response latency under 12 sec',
    },
    {
      title: 'Response Behavior',
      points: '+5 pts',
      percentage: 50,
      description: 'Opened initial outreach email in 6m, clicked pricing model link',
    },
  ];

  const auditTrail = [
    { time: '09:42 AM', label: 'Inbound Arrival', description: 'Visited pricing page via organic Google Search ("Enterprise CRM India WhatsApp API")' },
    { time: '09:47 AM', label: 'Evaluation', description: 'Deep-dived Enterprise CRM comparison matrix & SOC2 Type II audit report' },
    { time: '10:02 AM', label: 'Bot Interaction', description: 'Initiated Copilot session: inquired about WhatsApp Business API throughput rates', highlight: true },
    { time: '10:07 AM', label: 'Scoping', description: 'Inquired implementation costs for 50-seat engineering and sales rollout' },
    { time: '10:13 AM', label: 'Commercial Request', description: 'Requested custom enterprise quotation and HubSpot data migration SLA', highlight: true },
    { time: '10:18 AM', label: 'Sentiment Spike', description: '"Looks exactly what our team needs to unify sales and support."', highlight: true },
    { time: '10:21 AM', label: 'CRITICAL ELEVATION', description: 'AI dynamically elevated score 78 → 94. Classified: HOT LEAD', critical: true },
    { time: '10:22 AM', label: 'Routing Complete', description: 'Assigned to Sarah Jenkins (VP Sales). Real-time Slack dispatch fired.' },
  ];

  return (
    <div className="flex h-screen bg-[#f8f9ff] overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header customerData={customerData} />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            {/* Top Profile Section */}
            <ProfileHeader customerData={customerData} />

            {/* Three Column Grid */}
            <div className="grid grid-cols-12 gap-5 mt-5">
              {/* Left Column - Profile & Requirements */}
              <div className="col-span-4 space-y-4">
                <ProfileTelemetry customerData={customerData} />
                <AiExtractedIntentMap />
                <CommercialFitCard />
              </div>

              {/* Center Column - Scoring */}
              <div className="col-span-4 space-y-4">
                <DynamicScoreCard customerData={customerData} />
                <ScoringBreakdown factors={scoringFactors} />
              </div>

              {/* Right Column - Audit Trail */}
              <div className="col-span-4 space-y-4">
                <AuditTrailCard trail={auditTrail} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto flex flex-col">
      {/* Logo Section */}
      <div className="p-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <img src={images.logo} alt="LeadIQ" className="h-8 w-16" />
          <div>
            <div className="text-sm font-semibold text-gray-900">LeadIQ Enterprise</div>
            <div className="text-xs text-blue-600">AI Autonomous CRM</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-6">
        <SidebarSection title="Dashboard" items={[
          { label: 'AI Lead Qualification', icon: '◎' },
          { label: 'AI Priority Queue', icon: '◈' },
          { label: 'AI Dynamic Scoring', icon: '◐', active: true },
        ]} />

        <SidebarSection title="Engagement & Channels" items={[
          { label: 'Conversations & Bot', icon: '◯' },
          { label: 'Visitor Intelligence', icon: '◈' },
          { label: 'AI Follow-up Center', icon: '▣' },
        ]} />

        <SidebarSection title="Sales & Pipeline" items={[
          { label: 'Sales Pipeline', icon: '◎' },
          { label: 'CRM Database', icon: '◎' },
        ]} />

        <SidebarSection title="Intelligence & Automation" items={[
          { label: 'AI Insights & Analytics', icon: '▲' },
          { label: 'Automation Workflows', icon: '◆' },
          { label: 'Integrations & Settings', icon: '⚙' },
        ]} />
      </nav>

      {/* Footer Stats */}
      <div className="p-3 m-2 bg-blue-50 rounded-lg space-y-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-blue-600">AI Copilot Active</span>
          <span className="text-xs font-semibold">98.4%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
            <span className="text-sm text-gray-600">Real-time Telemetry</span>
          </div>
          <span className="text-sm font-semibold">42ms</span>
        </div>
      </div>
    </div>
  );
};

const SidebarSection = ({ title, items }) => {
  return (
    <div>
      <h3 className="px-2 text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
        {title}
      </h3>
      <div className="space-y-1">
        {items.map((item) => (
          <button
            key={item.label}
            className={`w-full px-2 py-2 rounded-lg text-left text-sm transition-colors ${
              item.active
                ? 'bg-gray-900 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const Header = ({ customerData }) => {
  return (
    <div className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10">
      <div className="h-16 px-6 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 rounded-lg p-2 flex items-center gap-2">
            <img src={images.customerProfile} alt="Company" className="h-6 w-6" />
            <div>
              <div className="text-xs font-semibold text-gray-900">Acme Technologies Inc.</div>
              <div className="text-xs text-gray-600">Enterprise Plan</div>
            </div>
            <span className="text-gray-400 text-xs ml-1">›</span>
          </div>

          <div className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
            Active CRM Sync • Connected
          </div>
        </div>

        {/* Center Search */}
        <div className="flex-1 max-w-md mx-6">
          <div className="bg-blue-50 rounded-lg px-3 py-2 flex items-center text-sm text-gray-600">
            <span className="text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent ml-2 flex-1 outline-none text-sm"
            />
            <kbd className="text-xs text-gray-500 bg-white border border-gray-300 rounded px-2 py-1 ml-2">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1 hover:bg-blue-700">
            <span>✨</span> Ask AI Agent
          </button>
          <div className="text-xs text-gray-600">Synced 2m ago</div>
          <button className="relative p-1.5 hover:bg-gray-100 rounded-lg">
            <span className="text-gray-600">🔔</span>
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
              8
            </span>
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-600">⚙</button>

          {/* User Profile */}
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200">
            <img
              src={images.profileAvatar}
              alt="Sarah"
              className="w-8 h-8 rounded-full ring-2 ring-blue-200"
            />
            <div className="text-sm">
              <div className="font-semibold text-gray-900">Sarah Jenkins</div>
              <div className="text-xs text-gray-600">VP Sales</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileHeader = ({ customerData }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start justify-between">
      {/* Left: Profile Info */}
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="relative">
          <img
            src={images.customerProfile}
            alt={customerData.name}
            className="w-20 h-20 rounded-xl ring-2 ring-blue-200"
          />
          <span className="absolute bottom-0 right-0 w-5 h-5 bg-blue-600 rounded-full ring-2 ring-white flex items-center justify-center text-white text-xs">
            ✓
          </span>
        </div>

        {/* Profile Details */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-2xl font-semibold text-gray-900">{customerData.name}</h2>
            <span className="text-gray-500">·</span>
            <span className="text-base font-semibold text-gray-700">{customerData.title}</span>
          </div>
          <p className="text-sm text-blue-600 font-semibold mb-2">@ {customerData.company}</p>

          {/* Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="danger" label="HOT LEAD" />
            <Badge variant="info" label={`Score: ${customerData.score}/100`} />
            <Badge variant="secondary" label={`AI Confidence: ${customerData.aiConfidence}%`} />
            <Badge variant="blue" label={`Assigned: ${customerData.assignedTo}`} />
          </div>
        </div>
      </div>

      {/* Right: Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <ActionButton label="Call (+91 98765 43210)" />
        <ActionButton label="Send AI Email" variant="primary" />
        <ActionButton label="WhatsApp Follow-up" />
        <ActionButton label="Schedule Demo" />
        <ActionButton label="Convert to Deal" variant="success" className="col-span-2" />
      </div>
    </div>
  );
};

const Badge = ({ variant, label }) => {
  const variants = {
    danger: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700',
    secondary: 'bg-blue-50 text-gray-700',
    blue: 'bg-blue-100 text-gray-900',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}>
      {label}
    </span>
  );
};

const ActionButton = ({ label, variant = 'secondary', className = '' }) => {
  const variants = {
    primary: 'bg-blue-50 text-gray-900 hover:bg-blue-100',
    success: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-blue-50 text-gray-900 hover:bg-blue-100',
  };

  return (
    <button
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

const ProfileTelemetry = ({ customerData }) => {
  return (
    <Card title="PROFILE TELEMETRY" badge="B2B SaaS Fit">
      <div className="space-y-3">
        <InfoRow icon="✉" label="Email" value={customerData.email} />
        <InfoRow icon="📍" label="Hub Location" value={customerData.location} />

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-xs font-semibold text-gray-600 mb-2">Company Scale</p>
            <p className="text-lg font-semibold text-gray-900">{customerData.companySize}</p>
            <p className="text-xs text-gray-600">Active headcount</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-xs font-semibold text-gray-600 mb-2">Annual Revenue</p>
            <p className="text-lg font-semibold text-gray-900">{customerData.revenue}</p>
            <p className="text-xs text-blue-600 font-semibold">{customerData.stage}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

const InfoRow = ({ icon, label, value }) => {
  return (
    <div className="bg-blue-50 rounded-lg p-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-gray-600">{icon}</span>
        <span className="text-sm text-gray-600">{label}</span>
      </div>
      <span className="text-sm font-medium text-gray-900">{value}</span>
    </div>
  );
};

const AiExtractedIntentMap = () => {
  const requirements = [
    {
      title: 'Enterprise CRM with automated qualification',
      desc: 'High-volume inbound pipeline automation',
    },
    {
      title: 'Native WhatsApp Business API integration',
      desc: 'Two-way synchronized rep notifications',
    },
    {
      title: '50 sales rep licenses with granular RBAC',
      desc: 'Tier-2 regional sales permissions required',
    },
    {
      title: 'Cloud deployment with SOC2 compliance',
      desc: 'Mandatory security assessment in India DC',
    },
    {
      title: 'HubSpot data migration assistance',
      desc: '120k records + historical thread import',
    },
  ];

  return (
    <Card title="AI-EXTRACTED INTENT MAP" badge="5 / 5 Match" badgeVariant="primary">
      <p className="text-sm text-gray-600 mb-4">
        Synthesized from website navigation path, bot dialogues, and downloaded enterprise architectures.
      </p>

      <div className="space-y-2">
        {requirements.map((req, idx) => (
          <div key={idx} className="bg-blue-50 rounded-lg p-3 flex gap-2">
            <span className="text-blue-600 mt-1">✓</span>
            <div>
              <p className="text-sm font-medium text-gray-900">{req.title}</p>
              <p className="text-xs text-gray-600">{req.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

const CommercialFitCard = () => {
  return (
    <Card title="COMMERCIAL FIT & URGENCY">
      <div className="space-y-3">
        {/* Verified Budget */}
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-600">Verified Budget</span>
            <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">100% Match</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900 mb-1">₹8,50,000 – ₹10,00,000</p>
          <p className="text-xs text-gray-600">Aligns directly with Enterprise 50-Seat Tier (Annual)</p>
        </div>

        {/* Procurement Cycle */}
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-600">Procurement Cycle</span>
            <span className="text-xs font-semibold text-red-700 bg-red-100 px-2 py-1 rounded">Critical Window</span>
          </div>
          <p className="text-lg font-semibold text-gray-900 mb-1">Within 14–30 days</p>
          <p className="text-xs text-gray-600">Impending fiscal year-end budget lapse (Q4 Allocation)</p>
        </div>

        {/* Win Likelihood */}
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-600">Win Likelihood</span>
            <span className="text-lg font-bold text-blue-600">88%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
            <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '88%' }}></div>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600">Conversion Velocity</span>
            <span className="text-gray-900 font-semibold">2.4x above cohort median</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

const DynamicScoreCard = ({ customerData }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 h-80">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-semibold text-gray-600 uppercase">Dynamic Score Gauge</h3>
        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">Live Model</span>
      </div>

      {/* Circular Score */}
      <div className="flex items-center justify-center mb-6 relative h-40">
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* SVG Circle */}
          <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#e5eeff" strokeWidth="2" />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#4b41e1"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 40 * (customerData.score / 100)} ${2 * Math.PI * 40}`}
            />
          </svg>

          {/* Center Text */}
          <div className="text-center z-10">
            <p className="text-4xl font-bold text-gray-900">{customerData.score}</p>
            <p className="text-xs font-semibold text-gray-600 uppercase">Out of 100</p>
            <Badge variant="danger" label="HOT LEAD" />
          </div>
        </div>
      </div>

      {/* Score Stats */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-blue-50 rounded-lg p-2">
          <p className="text-xs text-gray-600 font-semibold">Prior Score</p>
          <p className="text-sm font-semibold text-gray-900">{customerData.previousScore} pts</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-2">
          <p className="text-xs text-gray-600 font-semibold">Delta Shift</p>
          <p className="text-sm font-bold text-blue-600">+{customerData.scoreIncrease} pts</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-2">
          <p className="text-xs text-gray-600 font-semibold">Quantile</p>
          <p className="text-sm font-semibold text-gray-900">{customerData.quantile}</p>
        </div>
      </div>
    </div>
  );
};

const ScoringBreakdown = ({ factors }) => {
  return (
    <Card title="SCORING WEIGHT BREAKDOWN" subtitle="6 Signals Evaluated">
      <div className="space-y-4">
        {factors.map((factor, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">{factor.title}</span>
              <span className="text-sm font-bold text-blue-600">{factor.points}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-blue-600 h-1 rounded-full transition-all"
                style={{ width: `${factor.percentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-600">{factor.description}</p>
          </div>
        ))}
      </div>

      {/* Sentiment Analysis */}
      <div className="mt-4 bg-blue-50 rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-900">Sentiment Analysis</span>
          <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
            Positive (89% confidence)
          </span>
        </div>
        <div className="h-8 bg-gray-300 rounded-full flex items-center">
          {/* Waveform visualization */}
          <div className="flex items-center justify-center w-full h-full">
            <svg width="100%" height="24" viewBox="0 0 200 24">
              <polyline
                points="0,12 10,8 20,14 30,6 40,16 50,10 60,12 70,8 80,14 90,10 100,12 110,8 120,14 130,6 140,16 150,10 160,12 170,8 180,14 190,10 200,12"
                fill="none"
                stroke="#4b41e1"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-600 mt-2">
          <span>Session Open: Neutral</span>
          <span className="text-blue-600 font-semibold">Positive → Positive → Highly Bullish</span>
        </div>
      </div>
    </Card>
  );
};

const AuditTrailCard = ({ trail }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 space-y-4">
      <div>
        <h3 className="text-xs font-semibold text-blue-600 uppercase mb-1">Explainable AI Decision Audit</h3>
        <p className="text-xs text-gray-600">Today (IST)</p>
      </div>

      <p className="text-xs text-gray-600">
        Complete transparent lineage of machine inferences and automated lead elevation decisions.
      </p>

      {/* Timeline */}
      <div className="space-y-4 relative pl-8">
        {trail.map((item, idx) => (
          <div key={idx} className="relative">
            {/* Timeline dot */}
            <div
              className={`absolute left-0 top-1 w-3 h-3 rounded-full border-2 border-white transform -translate-x-1/2 -translate-y-1/2 ${
                item.critical
                  ? 'bg-red-600'
                  : item.highlight
                  ? 'bg-blue-600'
                  : 'bg-blue-200'
              }`}
            ></div>

            {/* Timeline line */}
            {idx < trail.length - 1 && (
              <div className="absolute left-0 top-3 w-0.5 h-12 bg-blue-100 transform -translate-x-1/2"></div>
            )}

            {/* Content */}
            <div
              className={`pl-4 ${
                item.critical ? 'bg-red-50 p-3 rounded-lg' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-900 text-sm">{item.time}</span>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${
                    item.critical
                      ? 'bg-red-100 text-red-700'
                      : item.highlight
                      ? 'text-blue-600'
                      : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </span>
              </div>
              <p
                className={`text-xs ${
                  item.description.startsWith('"')
                    ? 'italic text-gray-900'
                    : 'text-gray-600'
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Recommendation Box */}
      <div className="bg-blue-100 rounded-xl p-4 mt-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold text-blue-600">✨ COPILOT RECOMMENDED NEXT ACTION</span>
          <span className="text-xs font-semibold text-gray-900 bg-white px-2 py-1 rounded">Top Priority</span>
        </div>
        <p className="text-sm text-gray-900 mb-4">
          Send tailored proposal highlighting native{' '}
          <span className="font-semibold text-blue-600">WhatsApp workflow</span>, automated qualification mechanics, and
          guaranteed{' '}
          <span className="font-semibold text-blue-600">14-day onboarding SLA</span> with zero downtime data migration.
        </p>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700">
          <span>✨</span> Generate AI Personalized Follow-up
        </button>
      </div>
    </div>
  );
};

const Card = ({ title, badge, badgeVariant = 'secondary', subtitle, children }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xs font-semibold text-gray-600 uppercase">{title}</h3>
          {subtitle && <p className="text-xs text-gray-600 mt-1">{subtitle}</p>}
        </div>
        {badge && (
          <Badge variant={badgeVariant} label={badge} />
        )}
      </div>
      {children}
    </div>
  );
};

export default AiDynamicScoringCustomerProfile;
