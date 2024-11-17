"""

An English text needs to be encrypted using the following encryption scheme.
First, the spaces are removed from the text. Let

be the length of this text.
Then, characters are written into a grid, whose rows and columns have the following constraints:

Example

After removing spaces, the string is characters long. is between and

, so it is written in the form of a grid with 7 rows and 8 columns.

ifmanwas
meanttos
tayonthe
groundgo
dwouldha
vegivenu
sroots

    Ensure that

If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e.

    .

The encoded message is obtained by displaying the characters of each column, with a space between column texts. The encoded message for the grid above is:

imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

Create a function to encode a message.

Function Description

Complete the encryption function in the editor below.

encryption has the following parameter(s):

    string s: a string to encrypt

Returns

    string: the encrypted string

Input Format

One line of text, the string

Constraints


contains characters in the range ascii[a-z] and space, ascii(32).

Sample Input

haveaniceday

Sample Output 0

hae and via ecy

Explanation 0

, is between and .
Rewritten with rows and

columns:

have
anic
eday

Sample Input 1

feedthedog

Sample Output 1

fto ehg ee dd

Explanation 1

, is between and .
Rewritten with rows and

columns:

feed
thed
og

Sample Input 2

chillout

Sample Output 2

clu hlt io

Explanation 2

, is between and .
Rewritten with columns and rows ( so we have to use

.)

chi
llo
ut



"""





#
# Complete the 'encryption' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

encryption <- function(s) {

  # Calculate the ceiling of the square root
  square_root <- ceiling(sqrt(nchar(s)))



  # Initialize a vector to store encrypted parts
  encrypted_strings <- vector("list", square_root)



  # Loop to create chunks based on the square root calculation
  for (i in 1:square_root) {
    chunk <- ""

    # Inner loop to collect characters for each chunk
    for (j in seq(i, nchar(s), by = square_root)) {
      # Append the character
      chunk <- paste0(chunk, substr(s, j, j))
    }

    encrypted_strings[[i]] <- chunk

  }

  # Combine the chunks with spaces
  result <- paste(unlist(encrypted_strings), collapse = " ")

  return(result)

}

stdin <- file('stdin')
open(stdin)

fptr <- file(Sys.getenv("OUTPUT_PATH"))
open(fptr, open = "w")

s <- readLines(stdin, n = 1, warn = FALSE)

result <- encryption(s)

writeLines(result, con = fptr)

close(stdin)
close(fptr)
