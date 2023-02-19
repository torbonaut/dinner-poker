export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      dishes: {
        Row: {
          cooked_count: number | null;
          description: string | null;
          id: number;
          title: string | null;
        };
        Insert: {
          cooked_count?: number | null;
          description?: string | null;
          id?: number;
          title?: string | null;
        };
        Update: {
          cooked_count?: number | null;
          description?: string | null;
          id?: number;
          title?: string | null;
        };
      };
      dishes_tags: {
        Row: {
          dish_id: number | null;
          id: number;
          tag_id: number | null;
        };
        Insert: {
          dish_id?: number | null;
          id?: number;
          tag_id?: number | null;
        };
        Update: {
          dish_id?: number | null;
          id?: number;
          tag_id?: number | null;
        };
      };
      tags: {
        Row: {
          color: string | null;
          id: number;
          title: string | null;
        };
        Insert: {
          color?: string | null;
          id?: number;
          title?: string | null;
        };
        Update: {
          color?: string | null;
          id?: number;
          title?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
