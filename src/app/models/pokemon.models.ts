export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  stats: [
    {
      base_stat: string;
    },
    {
      base_stat: string;
    },
    {
      base_stat: string;
    },
    {
      base_stat: string;
    },
    {
      base_stat: string;
    },
    {
      base_stat: string;
    }
  ];
}

export interface Stats{
  base_stat: string
}
