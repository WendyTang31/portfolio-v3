/** Temporary: visitors skip the password. Set to false to lock ALIAS again. */
export const ALIAS_OPEN_WITHOUT_PASSWORD = true;

/** Studio lock for ALIAS. Change this anytime; then share the new word with people you invite. */
export const ALIAS_ACCESS_CODE =
  import.meta.env.VITE_ALIAS_PASSWORD || "unmask";

export const ALIAS_SESSION_KEY = "alias-unlocked";
