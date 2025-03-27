export interface Paper {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  keywords: string[];
  url: string;
  notes: string;
  category: string;
  read: boolean;
  dateAdded: string;
}

export const papers: Paper[] = [
  {
    id: '1',
    title: 'Attention Is All You Need',
    authors: ['Ashish Vaswani', 'Noam Shazeer', 'Niki Parmar', 'Jakob Uszkoreit', 'Llion Jones', 'Aidan N. Gomez', 'Łukasz Kaiser', 'Illia Polosukhin'],
    venue: 'NeurIPS',
    year: 2017,
    abstract: 'The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.',
    keywords: ['transformer', 'attention', 'deep learning', 'NLP'],
    url: 'https://arxiv.org/abs/1706.03762',
    notes: 'Introduced the transformer architecture which became fundamental for modern NLP models.',
    category: 'Machine Learning',
    read: true,
    dateAdded: '2023-01-15',
  },
  {
    id: '2',
    title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
    authors: ['Jacob Devlin', 'Ming-Wei Chang', 'Kenton Lee', 'Kristina Toutanova'],
    venue: 'NAACL',
    year: 2019,
    abstract: 'We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional representations from unlabeled text by jointly conditioning on both left and right context in all layers.',
    keywords: ['BERT', 'transformers', 'pre-training', 'NLP'],
    url: 'https://arxiv.org/abs/1810.04805',
    notes: 'Breakthrough in transfer learning for NLP tasks.',
    category: 'Natural Language Processing',
    read: true,
    dateAdded: '2023-02-10',
  },
  {
    id: '3',
    title: 'Deep Residual Learning for Image Recognition',
    authors: ['Kaiming He', 'Xiangyu Zhang', 'Shaoqing Ren', 'Jian Sun'],
    venue: 'CVPR',
    year: 2016,
    abstract: 'Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions.',
    keywords: ['ResNet', 'deep learning', 'computer vision'],
    url: 'https://arxiv.org/abs/1512.03385',
    notes: 'Introduced residual connections which enabled training much deeper networks.',
    category: 'Computer Vision',
    read: false,
    dateAdded: '2023-03-05',
  },
];

export const categories = Array.from(new Set(papers.map(paper => paper.category)));

export function getPaperById(id: string): Paper | undefined {
  return papers.find(paper => paper.id === id);
}

export function getPapersByCategory(category: string): Paper[] {
  return papers.filter(paper => paper.category === category);
}

export function getRecentPapers(limit: number = 5): Paper[] {
  return [...papers]
    .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
    .slice(0, limit);
} 