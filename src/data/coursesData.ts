import { Course, LearningPath } from '../types/learning';

export const COURSES: Course[] = [
  {
    id: 'course-ai-neural-nets',
    slug: 'deep-learning-neural-architectures',
    title: 'Deep Learning & Neural Architectures',
    tagline: 'Formulate, train, and inspect non-linear perceptrons and backpropagation dynamics from first principles.',
    category: 'ai-ml',
    categoryLabel: 'Artificial Intelligence',
    level: 'Intermediate',
    durationHours: 18,
    rating: 4.94,
    reviewsCount: 1420,
    studentsCount: 18450,
    image: '/src/assets/images/course_neural_networks_1790314370605.jpg',
    imageAlt: 'Visualized neural network layers with glowing connection weights and activation synapses',
    instructor: {
      name: 'Dr. Marcus Vance',
      title: 'Principal Research Scientist',
      affiliation: 'Institute for Computational Intelligence',
      avatarInitials: 'MV',
      bio: 'Former DeepMind senior researcher specializing in differentiable neural architectures, gradient dynamics, and loss surface geometry.'
    },
    prerequisites: ['Multivariate Calculus (Partial Derivatives)', 'Linear Algebra (Matrix Multiplications)', 'Python or TypeScript basics'],
    skillsLearned: ['Backpropagation derivation', 'Activation functions (ReLU, GELU, Sigmoid)', 'Loss function optimization', 'Overfitting mitigation & regularization'],
    modules: [
      {
        id: 'mod-1',
        title: 'Module 1: The Perceptron & Forward Propagation',
        description: 'From biological neurons to computational weighted summations and non-linear activation boundaries.',
        lessons: [
          {
            id: 'les-ai-1',
            title: '1.1 Mathematical Formulation of the Artificial Neuron',
            durationMinutes: 18,
            type: 'video',
            videoDurationText: '18:24',
            summary: 'Explore the linear combination z = w^T x + b and why activation functions prevent collapse into a single affine transform.',
            contentMarkdown: `### 1.1 The Artificial Neuron & Activation Functions

In deep learning, an artificial neuron performs two elementary transformations:
1. **Affine Projection**: Computes the inner product between weight vector $w$ and input vector $x$, offset by bias $b$:
   $$z = \\sum_{i=1}^n w_i x_i + b = \\mathbf{w}^T \\mathbf{x} + b$$
2. **Non-linear Activation**: Applies an element-wise mapping $\\sigma(z)$:
   $$a = \\sigma(z)$$

#### Why Non-Linearity Matters
Without a non-linear activation function, composing $L$ successive dense layers yields:
$$\\mathbf{a}^{(L)} = \\mathbf{W}^{(L)} (\\mathbf{W}^{(L-1)} \\dots (\\mathbf{W}^{(1)} \\mathbf{x} + \\mathbf{b}^{(1)}) + \\dots ) + \\mathbf{b}^{(L)} = \\mathbf{W}_{\\text{eff}} \\mathbf{x} + \\mathbf{b}_{\\text{eff}}$$
This collapses into an ordinary linear model, incapable of learning XOR decision boundaries or complex manifolds.

#### Common Activations:
- **Sigmoid**: $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ (Bounded $[0, 1]$, susceptible to vanishing gradients at $|z| \\gg 0$).
- **Tanh**: $\\tanh(z) = \\frac{e^z - e^{-z}}{e^z + e^{-z}}$ (Zero-centered $[-1, 1]$).
- **ReLU**: $\\text{ReLU}(z) = \\max(0, z)$ (Fast computation, non-saturating for $z > 0$, risk of dying neurons if learning rate is excessively high).`,
            quizQuestions: [
              {
                id: 'q-ai-1',
                question: 'What occurs when a multi-layer neural network uses exclusively linear activation functions across all layers?',
                options: [
                  'The network can model non-convex decision boundaries through sheer depth.',
                  'The entire network collapses mathematically into a single linear regression model.',
                  'Gradient descent diverges immediately due to infinite curvature.',
                  'Backpropagation calculates zero gradients for all intermediate layers.'
                ],
                correctIndex: 1,
                explanation: 'Matrix multiplication is associative and closed under composition. The composition of linear functions is strictly linear, meaning depth confers no representational power beyond a single affine layer.'
              },
              {
                id: 'q-ai-2',
                question: 'Why does the Sigmoid activation function trigger vanishing gradients in deep architectures?',
                options: [
                  'Its derivative saturates and approaches zero for large positive or negative inputs.',
                  'The function output is strictly negative for half of the input domain.',
                  'The second derivative is discontinuous at the origin.',
                  'It causes weights to update exponentially faster on every backward step.'
                ],
                correctIndex: 0,
                explanation: 'The derivative of sigmoid is dσ/dz = σ(z)(1 - σ(z)), which maxes out at 0.25 when z=0 and decays asymptotically toward 0 as |z| increases. Multiplying many values <= 0.25 via chain rule causes gradients to vanish exponentially.'
              }
            ],
            flashcards: [
              {
                id: 'fc-ai-1',
                front: 'What is the purpose of the bias term (b) in z = w·x + b?',
                back: 'It allows the activation threshold or decision hyper-plane to shift away from the coordinate origin, enabling the neuron to fire independently of zero-centered inputs.',
                hint: 'Think about a line y = mx + c versus y = mx.'
              },
              {
                id: 'fc-ai-2',
                front: 'What is the "Dying ReLU" problem?',
                back: 'When inputs to a ReLU unit fall consistently into the negative domain (z < 0), the gradient is zero (dz/dx = 0). The optimizer never updates the weights, rendering the neuron permanently dormant.',
                hint: 'Derivative of max(0, z) when z is negative.'
              }
            ]
          },
          {
            id: 'les-ai-2',
            title: '1.2 Interactive Lab: Neural Decision Boundaries & Loss Surface',
            durationMinutes: 30,
            type: 'lab',
            videoDurationText: 'Interactive Sandbox',
            simulationType: 'neural-net',
            summary: 'Tweak hidden layer weights, learning rate, and activation functions in real-time to classify non-linear 2D clusters and monitor loss convergence.',
            contentMarkdown: `### 1.2 Laboratory Exercise: Live Neural Boundary Playground

In this interactive laboratory, you directly adjust the hyperparameters of a 2-layer neural network classifying two intertwining data clusters:
- **Learning Rate (η)**: Controls step size along the negative loss gradient.
- **Activation Selection**: Compare Sigmoid, Tanh, and ReLU dynamics.
- **Decision Boundary**: Observe how non-linear warping separates positive (cyan) and negative (coral) data points.
- **Loss Convergence Curve**: Track Mean Squared Error over training iterations.`
          }
        ]
      },
      {
        id: 'mod-2',
        title: 'Module 2: Backpropagation & Stochastic Gradient Descent',
        description: 'Deriving the chain rule of partial derivatives and optimizing hyper-parameter momentum.',
        lessons: [
          {
            id: 'les-ai-3',
            title: '2.1 The Chain Rule & Error Sensitivity Propagation',
            durationMinutes: 24,
            type: 'video',
            videoDurationText: '24:10',
            summary: 'Detailed step-by-step calculus derivation of dL/dw using computational graphs and backward message passing.',
            contentMarkdown: `### 2.1 The Chain Rule in Computational Graphs

Backpropagation is reverse-mode automatic differentiation applied to a directed acyclic computational graph.

Given scalar loss $L = \\mathcal{L}(y, \\hat{y})$:
$$\\frac{\\partial L}{\\partial w_{ij}^{(l)}} = \\frac{\\partial L}{\\partial z_i^{(l)}} \\cdot \\frac{\\partial z_i^{(l)}}{\\partial w_{ij}^{(l)}} = \\delta_i^{(l)} \\cdot a_j^{(l-1)}$$

Where the error signal $\\delta_i^{(l)}$ propagates recursively backward:
$$\\delta_j^{(l)} = \\left( \\sum_{k} \\delta_k^{(l+1)} w_{kj}^{(l+1)} \\right) \\sigma'(z_j^{(l)})$$

#### Stochastic Gradient Descent with Momentum
Standard SGD updates weights as $w \\leftarrow w - \\eta \\nabla_w L$. Adding Polyak momentum smooths oscillations in ravines:
$$v_t = \\beta v_{t-1} + (1 - \\beta) \\nabla_w L$$
$$w_t = w_{t-1} - \\eta v_t$$`
          }
        ]
      }
    ]
  },
  {
    id: 'course-biology-vascular',
    slug: 'plant-cellular-physiology-vascular-systems',
    title: 'Plant Cellular Physiology & Vascular Transport',
    tagline: 'Unpack the biophysics of xylem cohesion-tension, phloem osmotic bulk flow, and transpiration pull.',
    category: 'biology',
    categoryLabel: 'Life Sciences',
    level: 'Foundational',
    durationHours: 12,
    rating: 4.88,
    reviewsCount: 890,
    studentsCount: 11200,
    image: '/src/assets/images/course_plant_biology_1790314386785.jpg',
    imageAlt: 'Microscopic cross-section of xylem vessels and phloem sieve tubes with moving fluid molecules',
    instructor: {
      name: 'Prof. Ananya Nair',
      title: 'Chair of Plant Biophysics',
      affiliation: 'Center for Environmental Botanical Research',
      avatarInitials: 'AN',
      bio: 'Leading researcher in hydraulic cavitation, stomatal conductance kinetics, and plant drought resilience mechanisms.'
    },
    prerequisites: ['Introductory Cell Biology', 'Basic Thermodynamics (Osmotic Pressure & Water Potential)'],
    skillsLearned: ['Cohesion-tension theory', 'Water potential gradient (Ψ)', 'Phloem pressure-flow hypothesis', 'Cavitation resistance'],
    modules: [
      {
        id: 'mod-bio-1',
        title: 'Module 1: The Soil-Plant-Atmosphere Continuum',
        description: 'Water potential gradients driving passive sap transport across hundreds of vertical meters without mechanical pumps.',
        lessons: [
          {
            id: 'les-bio-1',
            title: '1.1 Cohesion, Adhesion & Negative Hydraulic Pressure',
            durationMinutes: 20,
            type: 'video',
            videoDurationText: '20:15',
            summary: 'How hydrogen bonding between water molecules sustains tensile columns under negative pressures reaching -2.5 MPa.',
            contentMarkdown: `### 1.1 The Cohesion-Tension Theory of Xylem Flow

Water moves through trees without any metabolic pump or ATP expenditure inside xylem tracheids and vessel elements (which are dead at functional maturity).

#### The Water Potential Gradient ($\\Psi_w$)
Transport occurs down a continuous gradient of water potential:
$$\\Psi_{\\text{soil}} > \\Psi_{\\text{root}} > \\Psi_{\\text{stem}} > \\Psi_{\\text{leaf}} > \\Psi_{\\text{atmosphere}}$$

At $20^\\circ\\text{C}$ and $50\\%$ relative humidity:
- Soil: $\\Psi \\approx -0.1\\text{ to } -0.5\\text{ MPa}$
- Leaf mesophyll: $\\Psi \\approx -1.5\\text{ to } -2.5\\text{ MPa}$
- Atmosphere: $\\Psi_{\\text{air}} \\approx -100\\text{ MPa}$

This massive atmospheric gradient exerts a physical pull on the menisci within the cell wall micropores of mesophyll cells, generating negative tension transmitted through cohesive water hydrogen bonds.`,
            quizQuestions: [
              {
                id: 'q-bio-1',
                question: 'Which physical force is primarily responsible for preventing the breakage of the sap column under high tension in xylem vessels?',
                options: [
                  'Hydrogen bonding cohesion between polar water molecules.',
                  'Active ATP-driven pumping across xylem cell membranes.',
                  'Positive hydrostatic root pressure operating continuously.',
                  'Gas pocket expansion within tracheid lumens.'
                ],
                correctIndex: 0,
                explanation: 'Hydrogen bonding gives water an extraordinarily high tensile strength (> 20 MPa under pure conditions), allowing continuous liquid columns to withstand the tension created by transpiration without rupturing.'
              }
            ],
            flashcards: [
              {
                id: 'fc-bio-1',
                front: 'What is cavitation in xylem vessels?',
                back: 'The rupture of the sap column caused by excessive negative pressure or freeze-thaw cycles, leading to the formation of an air embolism that blocks water conduction.',
                hint: 'Think of an air lock in a pipe.'
              }
            ]
          },
          {
            id: 'les-bio-2',
            title: '1.2 Interactive Lab: Transpiration Rate & Vascular Fluid Dynamics',
            durationMinutes: 35,
            type: 'lab',
            videoDurationText: 'Interactive Simulation',
            simulationType: 'plant-vascular',
            summary: 'Manipulate humidity, stomata aperture, and soil water potential to observe sap flow velocity, xylem tension, and avoid embolism.',
            contentMarkdown: `### 1.2 Laboratory Sandbox: Vascular Dynamics Simulator

In this lab, you test the physical limits of plant vascular transport:
- **Atmospheric Relative Humidity**: Alter vapor pressure deficit (VPD).
- **Stomatal Conductance**: Open or close guard cells.
- **Xylem Tension Monitor**: Watch negative hydrostatic pressure build and safeguard against acoustic cavitation thresholds.`
          }
        ]
      }
    ]
  },
  {
    id: 'course-cloud-distributed',
    slug: 'distributed-systems-cloud-architecture',
    title: 'Distributed Systems & Cloud Architecture',
    tagline: 'Architect resilient multi-region infrastructure with circuit breakers, load balancers, and partition tolerance.',
    category: 'cloud',
    categoryLabel: 'Cloud & Infrastructure',
    level: 'Advanced',
    durationHours: 22,
    rating: 4.96,
    reviewsCount: 2150,
    studentsCount: 22100,
    image: '/src/assets/images/course_web_architecture_1790314400307.jpg',
    imageAlt: 'Distributed microservices architecture topology with load balancer, cluster nodes, and database replicas',
    instructor: {
      name: 'Henrik Lindqvist',
      title: 'Principal Systems Architect',
      affiliation: 'Nordic Distributed Labs',
      avatarInitials: 'HL',
      bio: 'Author of High-Throughput Microservices; designer of global latency-resilient transaction systems serving 500k RPS.'
    },
    prerequisites: ['Networking fundamentals (TCP/IP, HTTP/2)', 'Concurrency & Thread Pools', 'Basic Docker/Containerization'],
    skillsLearned: ['CAP theorem trade-offs', 'Circuit breaker pattern', 'Consistent hashing', 'Raft consensus & replication'],
    modules: [
      {
        id: 'mod-cloud-1',
        title: 'Module 1: Load Distribution & Fault Tolerance Patterns',
        description: 'Mitigating cascading failures, thunderous herds, and cold-start latency spikes in distributed clusters.',
        lessons: [
          {
            id: 'les-cloud-1',
            title: '1.1 Consistent Hashing & Ring Rebalancing',
            durationMinutes: 22,
            type: 'video',
            videoDurationText: '22:45',
            summary: 'Analyze how virtual nodes on a hash ring minimize cache churn and key reassignment from O(N) to O(K/N).',
            contentMarkdown: `### 1.1 Consistent Hashing in Modern Distributed Caches

When distributing $K$ keys across $N$ servers, naive modular hashing $\\text{hash}(k) \\pmod N$ fails disastrously when a node joins or leaves: nearly all keys remap to new locations, triggering a catastrophic cache stampede.

#### The Hash Ring Solution
Consistent hashing maps both servers and keys onto a continuous $2^{32}-1$ integer ring:
1. Each server $S_i$ is hashed to points on the ring using multiple **virtual nodes** (e.g. $S_{i,1}, S_{i,2}, \\dots, S_{i,v}$).
2. A key $k$ is mapped clockwise to the first server position it encounters.
3. When a node departs, only $K/N$ keys require migration to adjacent neighbors.`,
            quizQuestions: [
              {
                id: 'q-cloud-1',
                question: 'Why are virtual nodes (vnodes) essential in practical consistent hashing implementations?',
                options: [
                  'To prevent non-uniform distribution of keys ("hot spots") caused by sparse node positions.',
                  'To eliminate the requirement for TCP handshake confirmations.',
                  'To encrypt the payload during peer-to-peer gossip dissemination.',
                  'To enforce synchronous disk writes on every write request.'
                ],
                correctIndex: 0,
                explanation: 'With a small number of physical nodes, hash values may land close together by random chance. Introducing 100-250 virtual tokens per physical node evens out variance across the ring according to the law of large numbers.'
              }
            ],
            flashcards: [
              {
                id: 'fc-cloud-1',
                front: 'What is the role of a Circuit Breaker in microservices?',
                back: 'It monitors downstream service failure rates. When failures cross a threshold, it transitions from Closed to Open, immediately failing fast to protect the caller and allow the downstream service time to recover.',
                hint: 'Closed -> Open -> Half-Open states.'
              }
            ]
          },
          {
            id: 'les-cloud-2',
            title: '1.2 Interactive Lab: Live Load Balancer & Cascade Simulator',
            durationMinutes: 30,
            type: 'lab',
            videoDurationText: 'Interactive Simulation',
            simulationType: 'load-balancer',
            summary: 'Simulate high request surges across 4 backend service instances, induce node crashes, and test circuit breaker recovery.',
            contentMarkdown: `### 1.2 Laboratory Sandbox: Cloud Traffic & Fault Simulator

In this lab, you act as the site reliability engineer:
- **Request Influx Rate (RPS)**: Ramp traffic from 100 to 1,200 requests/sec.
- **Balancing Algorithm**: Toggle Round Robin, Least Connections, and Random Hash.
- **Chaos Injection**: Deliberately disable or lag specific cluster nodes.
- **Circuit Breaker**: Toggle automatic trip protection to prevent cascade saturation.`
          }
        ]
      }
    ]
  },
  {
    id: 'course-algorithms-data-structures',
    slug: 'algorithmic-complexity-spatial-structures',
    title: 'Algorithmic Complexity & Sorting Dynamics',
    tagline: 'Deconstruct asymptotic computational time bounds, divide-and-conquer partitioning, and tree traversals.',
    category: 'algorithms',
    categoryLabel: 'Computer Science',
    level: 'Foundational',
    durationHours: 14,
    rating: 4.91,
    reviewsCount: 1680,
    studentsCount: 19800,
    image: '/src/assets/images/course_neural_networks_1790314370605.jpg',
    imageAlt: 'Step-by-step array elements being partitioned, compared, and swapped with index pointers',
    instructor: {
      name: 'Dr. Tariq Al-Mansoor',
      title: 'Distinguished Fellow in Theoretical CS',
      affiliation: 'Polytechnic Computer Science Faculty',
      avatarInitials: 'TA',
      bio: 'ACM Fellow and competitive programming coach specializing in combinatorial graph theory and randomized algorithms.'
    },
    prerequisites: ['Basic Discrete Mathematics', 'Basic Big-O Notation knowledge'],
    skillsLearned: ['Master Theorem for Divide-and-Conquer', 'QuickSort pivot selection strategies', 'MergeSort stability invariants', 'In-place memory constraints'],
    modules: [
      {
        id: 'mod-algo-1',
        title: 'Module 1: Comparison-Based Sorting & The Ω(n log n) Lower Bound',
        description: 'Proving theoretical lower bounds via decision trees and visualizing partition mechanics.',
        lessons: [
          {
            id: 'les-algo-1',
            title: '1.1 The Information-Theoretic Lower Bound for Sorting',
            durationMinutes: 19,
            type: 'video',
            videoDurationText: '19:10',
            summary: 'Why no comparison-based sort can exceed O(n log n) worst-case time, demonstrated via leaf nodes of binary decision trees.',
            contentMarkdown: `### 1.1 The Ω(n log n) Comparison Lower Bound

Any algorithm that sorts by comparing pairs of elements can be modeled as a binary decision tree where:
- Each internal node represents a comparison $a_i \\le a_j$.
- Each leaf node represents a distinct permutation of the $n$ input items.

Since $n$ distinct elements possess $n!$ possible orderings, the tree must have at least $n!$ leaves:
$$L \\ge n!$$

The height $h$ of a binary tree with $L$ leaves satisfies:
$$h \\ge \\lceil \\log_2(L) \\rceil \\ge \\log_2(n!)$$

Applying **Stirling\'s Approximation** $\\ln(n!) \\approx n \\ln n - n$:
$$\\log_2(n!) = \\sum_{i=1}^n \\log_2 i \\ge \\sum_{i=n/2}^n \\log_2(n/2) = \\frac{n}{2} (\\log_2 n - 1) = \\Omega(n \\log n)$$

Hence, algorithms like MergeSort and HeapSort are asymptotically optimal within the comparison model.`,
            quizQuestions: [
              {
                id: 'q-algo-1',
                question: 'What is the primary worst-case vulnerability of classical QuickSort with fixed first-element pivot selection?',
                options: [
                  'O(n^2) runtime on already-sorted or reverse-sorted input arrays.',
                  'Excessive heap memory allocation exceeding O(n log n) space.',
                  'Inability to process arrays with negative floating-point numbers.',
                  'Infinite recursion caused by duplicate key values.'
                ],
                correctIndex: 0,
                explanation: 'When the array is already sorted and the first element is selected as pivot, each partition stage only reduces the subproblem size by 1 (yielding subproblems of sizes n-1, n-2, ... 1), causing recursion depth n and quadratic O(n^2) total comparisons.'
              }
            ],
            flashcards: [
              {
                id: 'fc-algo-1',
                front: 'What does algorithmic stability mean in sorting?',
                back: 'A sorting algorithm is stable if it preserves the relative original order of records with equal keys.',
                hint: 'If two items have value 4, does item A stay before item B?'
              }
            ]
          },
          {
            id: 'les-algo-2',
            title: '1.2 Interactive Lab: Step-by-Step Sorting Engine',
            durationMinutes: 25,
            type: 'lab',
            videoDurationText: 'Interactive Simulation',
            simulationType: 'sorting-viz',
            summary: 'Step through Bubble Sort, QuickSort, and Selection Sort step-by-step with real-time comparison counts, array swaps, and speed throttle.',
            contentMarkdown: `### 1.2 Laboratory Sandbox: Algorithm Execution Engine

Experiment with sorting dynamics:
- **Algorithm Switch**: Toggle QuickSort, BubbleSort, and InsertionSort.
- **Array Generation**: Random, Nearly Sorted, or Reverse Order.
- **Execution Controller**: Step Forward, Play continuous animation, or Reset array.
- **Real-Time Counters**: Compare operations count and memory state live.`
          }
        ]
      }
    ]
  }
];

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'path-ai-systems',
    title: 'Autonomous Systems & Deep Learning Architect',
    role: 'AI Infrastructure & Model Engineer',
    estimatedWeeks: 16,
    coursesCount: 3,
    description: 'A structured, rigorous track from mathematical backpropagation foundations to distributed high-throughput model deployment.',
    milestones: [
      {
        title: 'Milestone 1: Mathematical Foundations of Neural Graphs',
        description: 'Derive non-linear activations, multi-layer chain rules, and backpropagation matrices.',
        courseId: 'course-ai-neural-nets'
      },
      {
        title: 'Milestone 2: High-Performance Sorting & Computational Geometry',
        description: 'Master cache-friendly memory structures, divide-and-conquer optimizations, and graph traversal.',
        courseId: 'course-algorithms-data-structures'
      },
      {
        title: 'Milestone 3: Cloud Scaling & Fault-Tolerant Model Serving',
        description: 'Deploy resilient clusters with circuit breakers, consistent hashing rings, and load shedding.',
        courseId: 'course-cloud-distributed'
      }
    ]
  },
  {
    id: 'path-computational-biology',
    title: 'Computational Biophysics & Environmental Modeling',
    role: 'Bio-Systems Researcher',
    estimatedWeeks: 12,
    coursesCount: 2,
    description: 'Bridge physical transport biophysics with algorithmic modeling of complex organism dynamics.',
    milestones: [
      {
        title: 'Milestone 1: Fluid Dynamics in Living Organisms',
        description: 'Model cohesion-tension negative pressures, xylem cavitation resistance, and stomatal kinetics.',
        courseId: 'course-biology-vascular'
      },
      {
        title: 'Milestone 2: Machine Learning for Biological Pattern Recognition',
        description: 'Train neural architectures on botanical sensor telemetry and environmental flux datasets.',
        courseId: 'course-ai-neural-nets'
      }
    ]
  }
];

export const INITIAL_DISCUSSIONS = [
  {
    id: 'disc-1',
    author: 'Sarah Chen',
    avatarText: 'SC',
    role: 'Student' as const,
    timeAgo: '2 hours ago',
    content: 'When adjusting the learning rate in the 1.2 Neural Net Lab past 0.45, the decision boundary starts oscillating wildly between the two cluster centroids. Is this the exact onset of gradient explosion or loss landscape overshoot?',
    upvotes: 14,
    repliesCount: 3
  },
  {
    id: 'disc-2',
    author: 'Dr. Marcus Vance',
    avatarText: 'MV',
    role: 'Instructor' as const,
    timeAgo: '1 hour ago',
    content: 'Exactly, Sarah. When η > 2 / λ_max (where λ_max is the maximum eigenvalue of the Hessian matrix of the loss), the step size overshoots the minimum parabola, sending the parameters into unbounded oscillations. Great observation!',
    upvotes: 28,
    repliesCount: 1
  },
  {
    id: 'disc-3',
    author: 'Liam O\'Connor',
    avatarText: 'LO',
    role: 'Student' as const,
    timeAgo: 'Yesterday',
    content: 'In the consistent hashing ring lesson, why is MD5 or SHA-256 usually preferred over standard 32-bit CRC or Murmur3 for generating the token points on the ring?',
    upvotes: 9,
    repliesCount: 4
  }
];
