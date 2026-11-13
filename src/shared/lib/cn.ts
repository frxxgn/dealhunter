/** Une nombres de clase e ignora los valores vacíos. */
export function cn(
  ...parts: Array<string | false | null | undefined>
): string {
  return parts.filter(Boolean).join(' ')
}
