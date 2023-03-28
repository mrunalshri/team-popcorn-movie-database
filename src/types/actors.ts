export interface ActorDetails {
	birthday?: string | null;
	known_for_department?: string;
	deathday?: string | null;
	id?: number;
	name?: string;
	also_known_as?: string[];
	gender?: number;
	biography?: string;
	popularity?: number;
	place_of_birth?: string | null;
	profile_path?: string | null;
	adult?: boolean;
	imdb_id?: string;
	homepage?: string | null;
}

export interface ActorCredits {
	cast?: ActorCast[];
	crew?: ActorCrew[];
}

export interface ActorCast {
	character?: string;
	credit_id?: string;
	release_date?: string;
	vote_count?: number;
	video?: boolean;
	adult?: boolean;
	vote_average?: number;
	title?: string;
	genre_ids?: number[];
	original_language?: string;
	original_title?: string;
	popularity?: number;
	id?: number;
	backdrop_path?: string | null;
	overview?: string;
	poster_path?: string | null;
}

export interface ActorCrew {
	id?: number;
	department?: string;
	original_language?: string;
	original_title?: string;
	job?: string;
	overview?: string;
	vote_count?: number;
	video?: boolean;
	poster_path?: string | null;
	backdrop_path?: string | null;
	title?: string;
	popularity?: number;
	genre_ids?: number[];
	vote_average?: number;
	adult?: boolean;
	release_date?: string;
	credit_id?: string;
}
