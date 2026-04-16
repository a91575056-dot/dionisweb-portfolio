type SchemaScriptProps = {
  data: object | object[];
};

export function SchemaScript({ data }: SchemaScriptProps) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
