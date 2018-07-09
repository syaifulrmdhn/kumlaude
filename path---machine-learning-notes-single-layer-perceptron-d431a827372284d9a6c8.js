webpackJsonp([0xbfef9f020661],{713:function(n,s){n.exports={data:{markdownRemark:{html:'<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># Author: Fajar U N</span>\n\n<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd\n<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np\n<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt\n\n<span class="token keyword">def</span> <span class="token function">nonlin</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> deriv<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>deriv<span class="token operator">==</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>x<span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">return</span> <span class="token number">1</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span>np<span class="token punctuation">.</span>exp<span class="token punctuation">(</span><span class="token operator">-</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\ndf <span class="token operator">=</span> pd<span class="token punctuation">.</span>get_dummies<span class="token punctuation">(</span>pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">\'iris.csv\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> columns<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">\'species\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>sample<span class="token punctuation">(</span>frac<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>\nlabel_cols <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'species_setosa\'</span><span class="token punctuation">,</span> <span class="token string">\'species_versicolor\'</span><span class="token punctuation">,</span> <span class="token string">\'species_virginica\'</span><span class="token punctuation">]</span>\n\n\nsplit_val <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>df<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.8</span><span class="token punctuation">)</span>\ntraining_input <span class="token operator">=</span> <span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">\'sepal_length\'</span><span class="token punctuation">,</span> <span class="token string">\'sepal_width\'</span><span class="token punctuation">,</span> <span class="token string">\'petal_length\'</span><span class="token punctuation">,</span> <span class="token string">\'petal_width\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">:</span>split_val<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>as_matrix<span class="token punctuation">(</span><span class="token punctuation">)</span>\ntesting_input <span class="token operator">=</span> <span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">\'sepal_length\'</span><span class="token punctuation">,</span> <span class="token string">\'sepal_width\'</span><span class="token punctuation">,</span> <span class="token string">\'petal_length\'</span><span class="token punctuation">,</span> <span class="token string">\'petal_width\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>split_val<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>as_matrix<span class="token punctuation">(</span><span class="token punctuation">)</span>\ntraining_output <span class="token operator">=</span> <span class="token punctuation">(</span>df<span class="token punctuation">[</span>label_cols<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">:</span>split_val<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>as_matrix<span class="token punctuation">(</span><span class="token punctuation">)</span>\ntesting_output <span class="token operator">=</span> <span class="token punctuation">(</span>df<span class="token punctuation">[</span>label_cols<span class="token punctuation">]</span><span class="token punctuation">[</span>split_val<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>as_matrix<span class="token punctuation">(</span><span class="token punctuation">)</span>\n\nnp<span class="token punctuation">.</span>random<span class="token punctuation">.</span>seed<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\nweights <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>\n\nlearning_rate <span class="token operator">=</span> <span class="token number">0.001</span>\n\n<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">xrange</span><span class="token punctuation">(</span><span class="token number">90000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    l0 <span class="token operator">=</span> training_input\n    l1 <span class="token operator">=</span> nonlin<span class="token punctuation">(</span>np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>l0<span class="token punctuation">,</span>weights<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    error <span class="token operator">=</span> l1 <span class="token operator">-</span> training_output\n    sum_error <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token operator">*</span>error<span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">if</span> i<span class="token operator">%</span><span class="token number">10000</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>\n        <span class="token keyword">print</span> <span class="token string">\'Error : \'</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>np<span class="token punctuation">.</span>mean<span class="token punctuation">(</span>sum_error<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n    l1_delta <span class="token operator">=</span> error <span class="token operator">*</span> nonlin<span class="token punctuation">(</span>l1<span class="token punctuation">,</span> deriv<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>\n\n    weights <span class="token operator">-=</span> <span class="token punctuation">(</span>learning_rate <span class="token operator">*</span> l0<span class="token punctuation">.</span>T<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>l1_delta<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token comment"># Testing the network</span>\nl0 <span class="token operator">=</span> testing_input\nl1 <span class="token operator">=</span> nonlin<span class="token punctuation">(</span>np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>l0<span class="token punctuation">,</span> weights<span class="token punctuation">)</span><span class="token punctuation">)</span>\nl1max <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span>l1<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>l1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>l1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">if</span> l1max<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> l1<span class="token punctuation">[</span>i<span class="token punctuation">,</span>j<span class="token punctuation">]</span><span class="token punctuation">:</span>\n            l1<span class="token punctuation">[</span>i<span class="token punctuation">,</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1.0</span>\n        <span class="token keyword">else</span> <span class="token punctuation">:</span>\n            l1<span class="token punctuation">[</span>i<span class="token punctuation">,</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0.0</span>\n\n<span class="token keyword">print</span> <span class="token string">\'Accuracy : \'</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>np<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span>l1 <span class="token operator">==</span> testing_output<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>testing_output<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>',timeToRead:1,excerpt:"",frontmatter:{title:"Singel Layer Perceptron (SGD)",cover:null},fields:{nextTitle:"Softmax with Tensorflow",nextSlug:"/machine-learning/notes/softmax-tf/",prevTitle:"Multil Layer Perceptron (Back Propagation)",prevSlug:"/machine-learning/notes/mlp-backprop/",slug:"/machine-learning/notes/single-layer-perceptron/",modifiedTime:"9-6-2018, 1:38"}},allDirectory:null,allFile:null},pathContext:{slug:"/machine-learning/notes/single-layer-perceptron/",slugTrim:"machine-learning/notes/single-layer-perceptron"}}}});
//# sourceMappingURL=path---machine-learning-notes-single-layer-perceptron-d431a827372284d9a6c8.js.map