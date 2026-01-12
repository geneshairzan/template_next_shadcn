import UI from "@ui";

export default function Pagination({ page, totalPages, onChange, siblingCount = 1 }) {
  const pages = getPages(page, totalPages, siblingCount);

  return (
    <UI.Row gap={1} center>
      <PageButton disabled={page === 1} onClick={() => onChange(page - 1)}>
        ‹
      </PageButton>

      {pages.map((p, i) =>
        p === "..." ? (
          <UI.Text key={i} className="px-2 text-muted-foreground">
            …
          </UI.Text>
        ) : (
          <PageButton key={p + "-" + i} active={p === page} onClick={() => onChange(p)}>
            {p}
          </PageButton>
        )
      )}

      <PageButton disabled={page === totalPages} onClick={() => onChange(page + 1)}>
        ›
      </PageButton>
    </UI.Row>
  );
}

function PageButton({ children, active, disabled, onClick }) {
  return (
    <UI.Col
      center
      onClick={!disabled ? onClick : undefined}
      className={`
        w-8 h-8 rounded-md text-sm select-none
        ${active ? "bg-primary text-primary-foreground" : "hover:bg-muted"}
        ${disabled ? "opacity-40 pointer-events-none" : "cursor-pointer"}
      `}
    >
      {children}
    </UI.Col>
  );
}

function getPages(page, totalPages, siblingCount) {
  const totalNumbers = siblingCount * 2 + 5;

  if (totalPages <= totalNumbers) {
    return range(1, totalPages);
  }

  const left = Math.max(page - siblingCount, 1);
  const right = Math.min(page + siblingCount, totalPages);

  const showLeftDots = left > 2;
  const showRightDots = right < totalPages - 1;

  if (!showLeftDots && showRightDots) {
    return [...range(1, 3 + siblingCount * 2), "...", totalPages];
  }

  if (showLeftDots && !showRightDots) {
    return [1, "...", ...range(totalPages - (2 + siblingCount * 2), totalPages)];
  }

  return [1, "...", ...range(left, right), "...", totalPages];
}

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}
