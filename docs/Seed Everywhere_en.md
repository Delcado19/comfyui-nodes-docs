# Documentation
- Class name: SeedEverywhere
- Category: Initialization
- Output node: True
- Repo Ref: https://github.com/chrisgoringe/cg-use-everywhere

The SeedEverywhere node aims to ensure the reproducibility of random operations in different parts of the system. It does this by setting seeds for random number generators, which is crucial for scientific experiments and simulations that require consistent results.

# Input types
## Required
- seed
    - The “seed” parameter is crucial for initializing the random number generator to a known state. This ensures that every time the node is executed, subsequent random operations will produce the same results, which is vital for obtaining consistent and comparable results in various applications.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- id
    - The “id” parameter, although not required, serves as an identifier for messages sent by the node. In a system where multiple instances of the node are running simultaneously, this can be particularly useful as it helps track and manage messages from different instances.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- seed
    - The output “seed” is the same as the input provided to the node, representing the state of the random number generator after the node executes. This can be used for further operations that require a consistent random state, ensuring the continuity of the random process.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chrisgoringe/cg-use-everywhere)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
