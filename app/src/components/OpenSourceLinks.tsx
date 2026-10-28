const GITHUB_REPOSITORY_URL = 'https://github.com/ziweiknows/ziwei-chart'
const LICENSE_URL = `${GITHUB_REPOSITORY_URL}/blob/main/LICENSE`

function GitHubIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.59 2 12.253c0 4.528 2.865 8.369 6.839 9.726.5.094.683-.222.683-.493 0-.244-.009-.889-.014-1.745-2.782.619-3.369-1.375-3.369-1.375-.455-1.185-1.11-1.5-1.11-1.5-.908-.636.069-.623.069-.623 1.004.072 1.532 1.057 1.532 1.057.892 1.566 2.341 1.114 2.91.852.091-.662.35-1.114.636-1.37-2.221-.259-4.555-1.138-4.555-5.065 0-1.119.39-2.034 1.029-2.75-.103-.259-.446-1.301.098-2.711 0 0 .84-.276 2.75 1.05A9.373 9.373 0 0 1 12 6.963a9.36 9.36 0 0 1 2.504.345c1.909-1.326 2.747-1.05 2.747-1.05.546 1.41.203 2.452.1 2.711.64.716 1.028 1.631 1.028 2.75 0 3.937-2.338 4.803-4.566 5.057.359.317.679.943.679 1.9 0 1.371-.013 2.477-.013 2.813 0 .274.18.592.688.492C21.138 20.618 24 16.779 24 12.253 24 6.59 19.523 2 14 2h-2Z"
      />
    </svg>
  )
}

export function GitHubLinkButton() {
  return (
    <a
      href={GITHUB_REPOSITORY_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Open GitHub repository"
      title="GitHub"
      className="
        group relative p-2.5 rounded-xl
        bg-white/[0.04] border border-white/[0.08]
        hover:bg-white/[0.08] hover:border-white/[0.12]
        transition-all duration-200
      "
    >
      <GitHubIcon className="h-5 w-5 text-text-muted group-hover:text-text transition-colors" />
    </a>
  )
}

export function OpenSourceFooterLinks() {
  return (
    <span className="inline-flex items-center gap-2">
      <a
        href={GITHUB_REPOSITORY_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 text-text-secondary hover:text-text transition-colors"
      >
        <GitHubIcon className="h-4 w-4" />
        GitHub
      </a>
      <span className="text-text-muted/60">/</span>
      <a
        href={LICENSE_URL}
        target="_blank"
        rel="noreferrer"
        className="text-text-secondary hover:text-text transition-colors"
      >
        MIT License
      </a>
    </span>
  )
}
