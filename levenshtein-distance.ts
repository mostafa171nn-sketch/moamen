/**
 * Computes the Levenshtein distance between two strings.
 * @param a - First string
 * @param b - Second string
 * @returns The minimum number of single-character edits required to change `a` into `b`
 */
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  // Initialize first row
  for (let i = 0; i <= b.length; i++) {
    matrix[0] = matrix[0] || [];
    matrix[0][i] = i;
  }

  // Initialize first column
  for (let i = 0; i <= a.length; i++) {
    matrix[i] = matrix[i] || [];
    matrix[i][0] = i;
  }

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;

      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,      // deletion
        matrix[i][j - 1] + 1,      // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }

  return matrix[a.length][b.length];
}

// Calculate distance between "Hidden" and "experience" from hero section
const word1 = "Hidden";
const word2 = "experience";
const distance = levenshteinDistance(word1, word2);

console.log(`Levenshtein distance between "${word1}" (hero h1) and "${word2}" is: ${distance}`);


