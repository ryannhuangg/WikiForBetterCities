create table wiki_articles (
  id text primary key,
  cat text not null check (cat in ('roads','bridges','structures','transit','parks','zoning')),
  title text not null,
  short text not null,
  body text[] not null,
  img_src text,
  img_credit text,
  created_at timestamptz not null default now()
);
alter table wiki_articles enable row level security;
create policy "wiki public read" on wiki_articles for select using (true);
create policy "wiki admin write" on wiki_articles for all using (is_admin()) with check (is_admin());

create table submissions (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  caption text,
  photo_path text not null,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now()
);
alter table submissions enable row level security;
create policy "anyone can submit" on submissions for insert with check (true);
create policy "admin reads submissions" on submissions for select using (is_admin());
create policy "admin updates submissions" on submissions for update using (is_admin()) with check (is_admin());
create policy "admin deletes submissions" on submissions for delete using (is_admin());

insert into storage.buckets (id, name, public) values ('submissions', 'submissions', false) on conflict (id) do nothing;
create policy "anyone uploads submission photos" on storage.objects for insert to anon, authenticated with check (bucket_id = 'submissions');
create policy "admin reads submission photos" on storage.objects for select to authenticated using (bucket_id = 'submissions' and is_admin());
create policy "admin deletes submission photos" on storage.objects for delete to authenticated using (bucket_id = 'submissions' and is_admin());

insert into wiki_articles (id, cat, title, short, body, img_src, img_credit) values
('complete-streets','roads','Complete streets','Streets designed to be safe for walking, biking, transit, and driving.',
array[$$A complete street is designed for everyone who uses it, not only people in cars. Depending on the location and traffic, the design can include sidewalks, bike lanes, crosswalks, bus stops, and curb ramps.$$,$$Many cities adopt complete streets policies so that road projects consider these users from the start. When a repaving or redesign is proposed, this framework is often behind changes such as protected bike lanes or narrower crossings.$$],
'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Protected_bike_lane_on_William_Street_near_Flinders_Street%2C_Melbourne.jpg/1280px-Protected_bike_lane_on_William_Street_near_Flinders_Street%2C_Melbourne.jpg','Philip Mallis, CC BY-SA 2.0, via Wikimedia Commons'),
('curb-extension','roads','Curb extension','A sidewalk bump-out that shortens crossing distance and slows turning cars.',
array[$$A curb extension, also called a bump-out, extends the sidewalk into the parking lane at an intersection or midblock crossing. Pedestrians cross a shorter distance, and drivers have to make slower, tighter turns.$$,$$Extensions can also make room for benches, plantings, or bus stops, and they keep parked cars farther from the corner so drivers can see people waiting to cross.$$],
'https://upload.wikimedia.org/wikipedia/commons/2/2e/Curb_extensions_at_midblock_crosswalk.jpg','Richard Drdul, CC BY-SA 2.0, via Wikimedia Commons'),
('road-diet','roads','Road diet','Reducing lanes to make room for bikes, parking, or wider sidewalks.',
array[$$A road diet reduces the number of travel lanes on a street, usually to make room for bike lanes, parking, turn lanes, or wider sidewalks. Many road diets keep the overall street width and simply re-stripe it.$$,$$Supporters point to fewer crashes and calmer traffic. Concerns about congestion on busy routes are common, so these changes are often measured before and after they are made.$$],
'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Pop-up_protected_bike_lane_and_protected_intersection.jpg/1280px-Pop-up_protected_bike_lane_and_protected_intersection.jpg','nickfalbo, CC BY-SA 2.0, via Wikimedia Commons'),
('footbridge','bridges','Footbridge','A bridge meant only for people walking or biking, often over roads or rail.',
array[$$A footbridge is built for pedestrians and cyclists, not cars. Footbridges often cross highways, railways, rivers, or creeks where a full road bridge would cost too much.$$,$$They can reconnect neighborhoods that a busy road or rail line divides. Their ramps or stairs must meet accessibility rules.$$],
'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/University_of_North_Texas_September_2015_40_%28pedestrian_bridge%29.jpg/1280px-University_of_North_Texas_September_2015_40_%28pedestrian_bridge%29.jpg','Michael Barera, CC BY-SA 4.0, via Wikimedia Commons'),
('load-rating','bridges','Load rating','The maximum weight a bridge is rated to safely carry.',
array[$$A load rating is the maximum weight a bridge is engineered and inspected to carry safely. Engineers calculate it from the bridge's design, materials, and condition.$$,$$When a rating drops, a bridge may be posted with weight limits and heavy vehicles may need a detour. This is why repair schedules and detour maps often come with bridge projects.$$],
'https://upload.wikimedia.org/wikipedia/commons/2/2f/GWR_bridge_weight_limit_sign_-_geograph.org.uk_-_6843191.jpg','Mr Red, CC BY-SA 2.0, via Wikimedia Commons'),
('mixed-use','structures','Mixed-use','A building with homes, shops, or offices together under one roof.',
array[$$A mixed-use building combines different functions in one structure. The most common version has shops or offices on the ground floor and homes above.$$,$$Mixed-use buildings let people walk to daily errands and keep street fronts active. Zoning rules decide where they are allowed and how large they can be.$$],
'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Rex26_Apartments_and_Aldi_-_Lyndale_Avenue%2C_Minneapolis_%2848979957807%29.jpg/1280px-Rex26_Apartments_and_Aldi_-_Lyndale_Avenue%2C_Minneapolis_%2848979957807%29.jpg','Tony Webster, CC BY-SA 2.0, via Wikimedia Commons'),
('setback','structures','Setback','The required distance between a building and the property line.',
array[$$A setback is the minimum distance a building must keep from a property line, street, or other edge of a lot. Setbacks leave room for sidewalks, landscaping, parking, light, and fire access.$$,$$Front, side, and rear setbacks are usually set separately, and the numbers change by zone. Planners often review them when a project asks for a variance.$$],
null,null),
('bus-rapid-transit','transit','Bus rapid transit','Buses with dedicated lanes and platforms that behave more like a train.',
array[$$Bus rapid transit (BRT) runs buses in dedicated lanes, often from platforms that allow level boarding and fare payment before the bus arrives. Because buses avoid traffic and stop less often, service can feel closer to a train than a regular bus route.$$,$$BRT usually costs less to build than rail and can be added to existing streets.$$],
'https://upload.wikimedia.org/wikipedia/commons/4/4a/Van_Ness_Bus_Rapid_Transit_01.jpg','Mattsjc, CC BY-SA 4.0, via Wikimedia Commons'),
('headway','transit','Headway','The time between two buses or trains on the same route.',
array[$$Headway is the time between one bus or train and the next on the same route. A 10-minute headway means a vehicle arrives every 10 minutes.$$,$$Short headways make a route easier to use, because riders don't need to check a schedule. Planners use headway to compare service quality across routes.$$],
'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Bishopsgate_Threadneedle_Street_bus_stop_in_the_City_of_London_England.jpg/1280px-Bishopsgate_Threadneedle_Street_bus_stop_in_the_City_of_London_England.jpg','Acabashi, CC BY-SA 4.0, via Wikimedia Commons'),
('pocket-park','parks','Pocket park','A very small public park built on a leftover or vacant lot.',
array[$$A pocket park is a very small public open space, often built on a vacant or leftover lot. It may have benches, planting beds, a few trees, or a play feature.$$,$$Pocket parks can be quick and inexpensive to create. They give neighborhoods shade and a place to rest where no larger park is nearby.$$],
'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Pocket_park_in_Hollywood_2.jpg/1280px-Pocket_park_in_Hollywood_2.jpg','Downtowngal, CC BY-SA 3.0, via Wikimedia Commons'),
('green-infrastructure','parks','Green infrastructure','Plants and soil used to soak up stormwater and cool neighborhoods.',
array[$$Green infrastructure uses plants, soil, and other natural features to manage stormwater and cool neighborhoods. Examples include rain gardens, bioswales, green roofs, and street trees.$$,$$Instead of sending rainwater straight into storm drains, these features let it soak into the ground, which can reduce flooding and heat in dense areas.$$],
'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Morning_after_a_rain_event_in_a_Southern_California_rain_garden_01.jpg/1280px-Morning_after_a_rain_event_in_a_Southern_California_rain_garden_01.jpg','Jengod, CC BY-SA 4.0, via Wikimedia Commons'),
('zoning','zoning','Zoning','Local rules that say what can be built where, and how big.',
array[$$Zoning is the set of local rules that controls what can be built on each piece of land and how large it can be. A zoning map divides the city into districts, such as residential, commercial, or industrial.$$,$$Each district has its own rules for uses, height, lot size, and parking. Changes to zoning are usually decided by the city council after a public hearing.$$],
'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Guilford_County_W-S_protection_study_-_zoning_map_LOC_2007629478.jpg/1280px-Guilford_County_W-S_protection_study_-_zoning_map_LOC_2007629478.jpg','U.S. Soil Conservation Service / Library of Congress, public domain'),
('variance','zoning','Variance','Special permission to break a zoning rule for one property.',
array[$$A variance is permission to break a specific zoning rule for one property. Owners ask for one when a rule would create a real hardship for their lot, such as an unusual shape or a building that needs to sit closer to the street.$$,$$Variances are usually decided case by case, and neighbors often get a chance to comment.$$],
null,null);
