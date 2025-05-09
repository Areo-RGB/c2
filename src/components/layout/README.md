# Layout Components

This directory contains layout components that can be used to structure pages throughout the application.

## Components

### Header

The `Header` component provides a consistent header across the application with the following features:
- Sidebar toggle
- Optional logo/title
- Horizontal navigation menu mirroring the sidebar items
- Support for content like search, theme switch, and profile dropdown
- Fixed positioning with shadow on scroll

```tsx
import { Header } from '@/components/layout/header'

// Basic usage
<Header>
  {/* Header content */}
</Header>

// With fixed positioning, custom title and navigation
<Header fixed logoText="Dashboard" showLogo showNav>
  {/* Header content */}
</Header>

// Disable navigation
<Header showNav={false}>
  {/* Header content */}
</Header>
```

### HeaderNav

The `HeaderNav` component displays the same navigation items from the sidebar in a horizontal format within the header.

```tsx
import { HeaderNav } from '@/components/layout/header-nav'

<HeaderNav />
```

### Main

The `Main` component serves as the main content area of the page.

```tsx
import { Main } from '@/components/layout/main'

<Main>
  {/* Page content */}
</Main>
```

### PageLayout

The `PageLayout` component combines the Header and Main components for a complete page layout.

```tsx
import { PageLayout } from '@/components/layout/page-layout'

// Basic usage with all defaults
<PageLayout>
  {/* Page content */}
</PageLayout>

// Customized PageLayout
<PageLayout 
  title="Users"
  showSearch={true}
  showThemeSwitch={true}
  showProfile={true}
  showNav={true}
  fixed={true}
  headerContent={<CustomHeaderComponent />}
>
  {/* Page content */}
</PageLayout>
```

## Usage Example

```tsx
import { PageLayout } from '@/components/layout/page-layout'

export default function UsersPage() {
  return (
    <PageLayout title="Users">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <p className="text-muted-foreground">Manage your users here</p>
      </div>
      
      {/* Page content */}
    </PageLayout>
  )
}
``` 