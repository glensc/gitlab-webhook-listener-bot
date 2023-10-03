// Implement GitLab slug
// https://gitlab.com/gitlab-org/gitlab/-/blob/d74faa2b680f705de90994abfc5272d61bd087c5/gems/gitlab-utils/lib/gitlab/utils.rb#L57-68
//
// A slugified version of the string, suitable for inclusion in URLs and
// domain names. Rules:
//
//   * Lowercased
//   * Anything not matching [a-z0-9-] is replaced with a -
//   * Maximum length is 63 bytes
//   * First/Last Character is not a hyphen

export const slugify = (slug: string): string =>
  slug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .substring(0, 63)
    .replace(/^-+|-+$/g, "");
